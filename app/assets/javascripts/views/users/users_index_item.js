GoodTomes.Views.UsersIndexItem = Backbone.View.extend ({
  template: JST["users/users_index_item"],
  className: "index-item-wrapper col-sm-4 col-md-3 col-lg-2",

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
