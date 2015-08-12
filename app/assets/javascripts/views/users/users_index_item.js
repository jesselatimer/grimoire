GoodTomes.Views.UsersIndexItem = Backbone.View.extend ({
  template: JST["users/users_index_item"],
  className: "user-index-item index-item",

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
