GoodTomes.Views.UsersIndex = Backbone.CompositeView.extend ({
  template: JST["users/users_index"],

  initialize: function () {
    this.collection.fetch();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addUserView);
    this.listenTo(this.collection, "remove", this.removeUserView);
    this.collection.each(this.addUserView.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ users: this.collection });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addUserView: function (user) {
    var subview = new GoodTomes.Views.UsersIndexItem({ model: user });
    this.addSubview('.user-items', subview);
  },

  removeUserView: function (user) {
    this.removeModelSubview('.user-items', user);
  }
});
