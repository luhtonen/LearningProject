// Create an observe
var observe = new can.Observe({});

// Listen for changes on the "title" attribute
observe.bind("title", function(evt, newTitle, oldTitle) {
    console.log("title: newTitle=", newTitle, "oldTitle=", oldTitle);
});

// Set a value for the "title" attribute
observe.attr("title", "First");
// console logs:
// title: newTitle= First oldTitle= undefined 

// Set another value for the "title" attribute
observe.attr("title", "Second");
// console logs:
// title: newTitle= Second oldTitle= First

observe.bind("change", function(evt, attr, how, newValue, oldValue) {
    console.log("change: attr=", attr, "how=", how, "newValue=", newValue, "oldValue=", oldValue);
});
observe.attr("title", "Third");
// change: attr= title how= set newValue= Third oldValue= Second
observe.removeAttr("title");
//change: attr= title how= remove newValue= undefined oldValue= Third

var observeList = new can.Observe.List([42, 44, 46]);
observeList.bind("add", function(evt, newValues, index) {
    console.log("add: newValues=", newValues, "index=", index);
});
observeList.bind("remove", function(evt, oldValues, index) {
    console.log("remove: oldValues=", oldValues, "index=", index);
});

observeList.push(48);
// [Log] add: newValues= [48] index= 3 (index-observe.js, line 29)
observeList.splice(1, 2);
// [Log] remove: oldValues= [44, 46] index= 1 (index-observe.js, line 32)
