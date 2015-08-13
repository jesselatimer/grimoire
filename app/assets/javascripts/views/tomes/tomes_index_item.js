GoodTomes.Views.TomesIndexItem = Backbone.View.extend ({
  template: JST["tomes/tomes_index_item"],
  className: "index-item-wrapper col-sm-6 col-md-4 col-lg-3",

  render: function () {
    var renderedContent = this.template({ tome: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
