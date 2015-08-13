GoodTomes.Views.TomesIndexItem = Backbone.View.extend ({
  template: JST["tomes/tomes_index_item"],
  className: "index-item-wrapper col-sm-4 col-md-3 col-lg-2",

  render: function () {
    var renderedContent = this.template({ tome: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
