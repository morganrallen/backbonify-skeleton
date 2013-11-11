var Backbone = require("backbone");

var PersonView = require("../views/PersonView");

module.exports = Backbone.Model.extend({
  initialize: function(models, options) {
    Backbone.Model.prototype.initialize.call(this, models, options);

    this.view = new PersonView({
      model: this
    });
  },

  greet: function() {
    return "Hello, " + this.attributes.name;
  }
});