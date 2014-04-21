// a list of bookmarks, as we would receive from the server
var bookmarks = [
    {url: "http://one.com", title: "One"},
    {url: "http://two.com", title: "Two"}
];

var viewModel = {bookmarks:bookmarks};
var element = $("#target");

// Render view by calling can.view
element.html(can.view("/app/base/bookmark_list", viewModel));

// can.view is implicitly called
element.view("/app/base/bookmark_list", viewModel);