var Bookmark = can.Model.extend({
    findAll: "GET /bookmarks",
    create: "POST /bookmarks",
    update: "PUT /bookmarks/{id}",
    destroy: "DELETE /bookmarks/{id}"
}, {
});
var ValidatingBookmark = Bookmark.extend({
    init: function() {
        var urlPattern = new RegExp("(http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?");
        // Add validations
        this.validatePresenceOf(["url", "title"]);
        this.validateFormatOf("url", urlPattern);
    }
}, {
});
var TaggedBookmark = ValidatingBookmark.extend({
    init: function() {
        // Initialize tagsAsString from tagList
        if (this.attr("id") != undefined) {
            var tagList = this.attr("tagList");
            this.attr("tagsAsString", tagList.join(", "));

            // Listen for changes on tagsAsString and set tagList
            this.bind("tagsAsString", this.onTagsAsStringChange);
        }
    },
    onTagsAsStringChange: function(evt, tagsAsString) {
        // Split string by comma and trim whitespace
        var trimmed = can.map(tagsAsString.split(","), can.trim);

        // Ignore empty tags, for example if user enters a,,,b
        var byNotEmpty = function(tag) {
            return tag.length > 0;
        };
        var notEmpty = can.filter(trimmed, byNotEmpty);
        var tagList = this.attr("tagList");
        // Update the tag list to match the ones entered by the user
        tagList.attr(notEmpty.sort(), true);
    }
});
TaggedBookmark.List = ValidatingBookmark.List.extend({
    // Returns a list of tags, each with label and bookmarkCount
    tags: function() {
        // Keep track of how many bookmarks per tag
        var bookmarkCounts = {};

        // Loop through each bookmark in the list
        this.each(function(bookmark) {
            var tagList = bookmark.attr("tagList");

            if (tagList) {
                // loop through each tag associated to the bookmark
                tagList.each(function(tag) {
                    var existing = bookmarkCounts[tag];
                    // Either increase the existing count, or initialize to 1
                    bookmarkCounts[tag] = existing ? existing + 1 : 1;
                });
            }
        });

        // The keys in bookmarkCounts are the tag labels
        var labels = Object.keys(bookmarkCounts);

        // Sort the tag labels
        labels.sort();

        // Return a list of tags with label and bookmark count
        return can.map(labels, function(label) {
            return {label: label, bookmarkCount:bookmarkCounts[label]};
        });
    }
});
var filterObject = new can.Map({
    filterTag: "" // the filter tag is initially blank
});
var filterFunction = function(bookmark) {
    var tagList = bookmark.attr("tagList");
    var filterTag = filterObject.attr("filterTag");
    var noFilter = (!filterTag) || (filterTag.length == 0);
    var tagListContainsFilterTag = tagList && tagList.indexOf(filterTag) > -1;
    return noFilter || tagListContainsFilterTag;
};
var BookmarkListControl = can.Control.extend({
    view: "/app/base/bookmark_list",

    init: function(element, options) {
        // save a reference to the eventHub observe
        this.eventHub = options.eventHub;
        // render the view on the element with the bookmarks as the model
        var view = options.view || this.view;
        element.html(view, this.getViewModel(options));
    },

    getViewModel: function(options) {
        return {bookmarks:options.bookmarks};
    },

    // retrieve the bookmark object from the <li> parent element
    getBookmark: function(el) {
        return el.closest("li").data("bookmark");
    },

    // handle the click on the delete button, destroy the bookmark
    ".delete click": function(el, evt) {
        this.getBookmark(el).destroy();
    },

    // handle the click on the edit button, trigger an editBookmark event
    ".edit click": function(el, evt) {
        can.trigger(this.eventHub, "editBookmark", this.getBookmark(el));
    },
    // Listen for clicks on tag links, set filterTag on filterObject
    "a.tag click": function(el, evt) {
        var tag = String(el.data("tag"));
        this.options.filterObject.attr("filterTag", tag);
    }
});
var TagFilterControl = can.Control.extend({
    defaults: {
        view: "/app/base/tag_filter"
    }
}, {
    init: function(element, options) {
        this.element.html(options.view, options.filterObject);
    },
    "a.clear click": function(el, evt) {
        this.options.filterObject.attr("filterTag", "");
    }
});
var TagListControl = can.Control.extend({
    defaults: {
        view: "/app/base/tag_list.mustache"
    }
}, {
    init: function(element, options) {
        this.eventHub = options.eventHub;
        var model = {bookmarks:options.bookmarks};
        element.html(options.view, model);
    },
    "a.tag click": function(el, evt) {
        var tag = el.data("tag");
        this.options.filterObject.attr("filterTag", tag.label);
    }
});
var BookmarkFormControl = can.Control.extend({
    BookmarkModel: TaggedBookmark,
    view: "/app/base/bookmark_form",

    init: function(element, options) {
        this.BookmarkModel.bind("created", function(evt, bookmark) {
            options.bookmarks.push(bookmark);
        });
        this.clearForm();
    },
    editBookmark: function(bookmark) {
        var view = this.options.view || this.view;
        this.element.html(view, bookmark);

        bookmark.bind("destroyed", this.clearForm.bind(this));
        var self = this;
        bookmark.bind("change", function() {
            var errorMessage = bookmark.errors() ?
                can.map(bookmark.errors(), function(message, attrName) {
                    return attrName + " " + message + ". ";
                }).join("") : "";
            self.element.find(".text-error").html(errorMessage);
        });
    },
    clearForm: function() {
        this.editBookmark(new this.BookmarkModel());
    },
    "{eventHub} editBookmark": function(eventHub, evt, bookmark) {
        this.editBookmark(bookmark);
    },
    ".save click": function(el, evt) {
        evt.preventDefault();
        var bookmark = el.data("bookmark");
        bookmark.attr(can.deparam(el.closest("form").serialize()));
        this.saveBookmark(bookmark);
    },
    saveBookmark: function(bookmark) {
        if (!bookmark.errors()) {
            bookmark.save(this.clearForm.bind(this), this.signalError);
        }
    },
    signalError: function() {
        alert("The input is not valid");
    },
    ".clear click": function(el, evt) {
        evt.preventDefault();
        this.clearForm();
    }
});

var App_base = can.Construct.extend({
    init: function() {
        // Retrieve the bookmarks from the server
        TaggedBookmark.findAll({}, function(bookmarks) {
            // Create the event hub observe
            var eventHub = new can.Map({});
            // Create the options object with the event hub  and the bookmarks
            var options = {eventHub: eventHub, bookmarks: bookmarks, filterObject: filterObject};

            // Create filtered bookmark list
            var filtered = bookmarks.filter(filterFunction);

            // Create an options object with the filtered bookmark list
            var filteredOptions = can.extend({}, options, {bookmarks:filtered});

            // Create the control, attaching it to the element on the page
            // that has id="bookmark_list_container"
            new BookmarkListControl("#bookmark_list_container", filteredOptions);

            // Create the bookmark form control (which we build in the
            // next section.)
            new BookmarkFormControl("#bookmark_form_container", options);
            new TagListControl("#tag_list_container", options);
            new TagFilterControl("#filter_container", options);
        });
    }
});