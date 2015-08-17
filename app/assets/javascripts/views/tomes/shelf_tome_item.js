GoodTomes.Views.ShelfTomeItem = Backbone.View.extend ({
  template: JST["tomes/shelf_tome_item"],
  className: "shelf-tome-item col-xs-6 col-sm-3 col-md-2",

  render: function () {
    var renderedContent = this.template({ tome: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
