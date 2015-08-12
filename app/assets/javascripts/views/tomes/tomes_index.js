GoodTomes.Views.TomesIndex = Backbone.CompositeView.extend ({
  template: JST["tomes/tomes_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ tomes: this.collection });
    this.$el.html(renderedContent);
    return this;
  }
});
