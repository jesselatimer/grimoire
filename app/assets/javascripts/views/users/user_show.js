GoodTomes.Views.UserShow = Backbone.CompositeView.extend ({
  template: JST["users/user_show"],
  className: "user-show-wrapper",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
