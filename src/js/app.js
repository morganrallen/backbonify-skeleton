var Backbone = require("backbone");
Backbone.$ = require("jquery-browserify");

var People = require("./collections/People");

$(function() {
  var people = new People([{
    name: "Fry"
  }, {
    name: "Bender"
  }]);

  document.body.appendChild(people.view.el);
});
