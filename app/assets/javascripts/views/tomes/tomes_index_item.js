GoodTomes.Views.TomesIndexItem = Backbone.View.extend ({
  template: JST["tomes/tomes_index_item"],
  className: "tome-index-item index-item",

  render: function () {
    var renderedContent = this.template({ tome: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
