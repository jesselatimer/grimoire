GoodTomes.Views.TomeShow = Backbone.CompositeView.extend ({
  template: JST["tomes/tome_show"],

  render: function () {
    var renderedContent = this.template({ tome: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
