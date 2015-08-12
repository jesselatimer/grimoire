GoodTomes.Views.UserShow = Backbone.CompositeView.extend ({
  template: JST["users/user_show"],

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
