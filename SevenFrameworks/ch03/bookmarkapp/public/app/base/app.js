var app = angular.module("App_base", ["ngResource"]);
app.factory("Bookmark", function($resource) {
    return $resource("/bookmarks/:id", {id:"@id"});
});
app.factory("bookmarks", function(Bookmark) {
    return Bookmark.query();
});
app.factory("saveBookmark", function(bookmarks, state) {
    return function(bookmark) {
        if (!bookmark.id) {
            bookmarks.push(bookmark);
        }
        bookmark.$save();
        state.clearForm();
    };
});
app.factory("deleteBookmark", function(bookmarks) {
    return function(bookmark) {
        var index = bookmarks.indexOf(bookmark);
        bookmark.$delete();
        bookmarks.splice(index, 1);
    };
});
app.service("state", function(Bookmark) {
    this.formBookmark = {bookmark:new Bookmark()};
    this.clearForm = function() {
        this.formBookmark.bookmark = new Bookmark();
    };
    this.bookmarkFilter = {filterTag:""};
});
app.factory("editBookmark", function(state) {
    return function(bookmark) {
        state.formBookmark.bookmark = bookmark;
    }
});
app.factory("buildTagList", function() {
    return function(bookmarks) {
        var bookmarkCounts = {};

        bookmarks.forEach(function(bookmark) {
            var tagList = bookmark.tagList;

            tagList.forEach(function(tag) {
                var existing = bookmarkCounts[tag];
                bookmarkCounts[tag] = existing ? existing + 1 : 1;
            });
        });

        var labels = Object.keys(bookmarkCounts);
        labels.sort();
        return labels.map(function(label) {
            return {label: label, bookmarkCount: bookmarkCounts[label]};
        });
    };
});
app.filter("filterByTag", function() {
    var byTag = function(filterTag) {
        return function(bookmark) {
            var tagList = bookmark.tagList;
            var noFilter = (!filterTag) || (filterTag.length == 0);
            var tagListContainsFilterTag = tagList && tagList.indexOf(filterTag) > -1;
            return noFilter || tagListContainsFilterTag;
        };
    };
    return function(bookmarks, filterTag) {
        return bookmarks.filter(byTag(filterTag));
    };
});
app.controller("BookmarkListController",
    function($scope, state, bookmarks, deleteBookmark, editBookmark) {
        $scope.bookmarks = bookmarks;
        $scope.bookmarkFilter = state.bookmarkFilter;
        $scope.filterBy = function(tag) {
            state.bookmarkFilter.filterTag = tag;
        };
        $scope.deleteBookmark = deleteBookmark;
        $scope.editBookmark = editBookmark;
    }
);
app.controller("TagListController",
    function($scope, state, bookmarks, buildTagList) {
        $scope.bookmarks = bookmarks;
        $scope.$watch("bookmarks", function(updatedBookmarks) {
            $scope.tags = buildTagList(updatedBookmarks);
        }, true); // true compares objects for equality rather than by reference

        $scope.filterBy = function(tag) {
            state.bookmarkFilter.filterTag = tag.label;
        };
    }
);
app.controller("TagFilterController",
    function($scope, state) {
        $scope.bookmarkFilter = state.bookmarkFilter;

        $scope.clearFilter = function() {
            state.bookmarkFilter.filterTag = "";
        };
    }
);
app.controller("BookmarkFormController",
    function($scope, state, bookmarks, saveBookmark) {
        $scope.formBookmark = state.formBookmark;
        $scope.saveBookmark = saveBookmark;
        $scope.clearForm = state.clearForm;
    }
);