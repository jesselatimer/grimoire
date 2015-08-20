GoodTomes.Views.ShelfTomeItem = Backbone.View.extend ({
  template: JST["tomes/shelf_tome_item"],
  tagName: "tr",
  className: "shelf-item",

  render: function () {
    var renderedContent = this.template({ tome: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
