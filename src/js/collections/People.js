var Backbone = require("backbone");
var PeopleList = require("../views/PeopleList");

module.exports = Backbone.Collection.extend({
  model: require("../models/Person"),

  initialize: function(models, options) {
    Backbone.Collection.prototype.initialize.call(this, models, options);

    this.view = new PeopleList({
      collection: this
    });
  }
});
