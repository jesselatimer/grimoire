GoodTomes.Routers.Router = Backbone.Router.extend ({
  routes: {
    "" : "tomesIndex",
    "users" : "usersIndex"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = options.users;
    this.tomes = options.tomes;
    this.users.fetch();
    this.tomes.fetch();
  },

  tomesIndex: function () {
    var view = new GoodTomes.Views.TomesIndex({ collection: this.tomes });
    this._swapView(view);
  },

  usersIndex: function () {
    var view = new GoodTomes.Views.UsersIndex({ collection: this.users });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
