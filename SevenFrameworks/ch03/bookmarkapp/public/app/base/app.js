var app = angular.module("App_base", ["ngResource", "ngRoute"],
    function($routeProvider) {
        var params = {
            controller: "BookmarkListController",
            templateUrl: "/app/base/bookmark_list.html"
        };
        $routeProvider.
            when("/", params).
            when("/filter/:tag", params);
    }
);
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
    function($scope, $routeParams, state, bookmarks, deleteBookmark, editBookmark) {
        $scope.bookmarks = bookmarks;
        $scope.bookmarkFilter = state.bookmarkFilter;
        state.bookmarkFilter.filterTag = $routeParams.tag;
        $scope.deleteBookmark = deleteBookmark;
        $scope.editBookmark = editBookmark;
    }
);
app.controller("TagListController",
    function($scope, $routeParams, state, bookmarks, buildTagList) {
        $scope.bookmarks = bookmarks;
        state.bookmarkFilter.filterTag = $routeParams.tag;
        $scope.$watch("bookmarks", function(updatedBookmarks) {
            $scope.tags = buildTagList(updatedBookmarks);
        }, true); // true compares objects for equality rather than by reference
    }
);
app.controller("TagFilterController",
    function($scope, $routeParams, state) {
        $scope.bookmarkFilter = state.bookmarkFilter;
        state.bookmarkFilter.filterTag = $routeParams.tag;
    }
);
app.controller("BookmarkFormController",
    function($scope, state, bookmarks, saveBookmark) {
        $scope.formBookmark = state.formBookmark;
        $scope.saveBookmark = saveBookmark;
        $scope.clearForm = state.clearForm;
    }
);