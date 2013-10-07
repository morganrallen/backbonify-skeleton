var Backbone = require("backbone");

module.exports = Backbone.View.extend({
  tagName: 'li',

  initialize: function(options) {
    Backbone.View.prototype.initialize.call(this, options);

    this.el.innerHTML = "Hello, " + this.model.attributes.name;

    options.parent && (options.parent.appendChild(this.el));
  }
});
