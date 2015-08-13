GoodTomes.Routers.Router = Backbone.Router.extend ({
  routes: {
    ""               : "tomesIndex",
    "tomes"          : "tomesIndex",
    "tomes/new"      : "tomeForm",
    "tomes/:id"      : "tomeShow",
    "tomes/:id/edit" : "tomeForm",
    "users"          : "usersIndex",
    "users/:id"      : "userShow"
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

  tomeShow: function (id) {
    var tome = this.tomes.getOrFetch(id);
    var view = new GoodTomes.Views.TomeShow({ model: tome });
    this._swapView(view);
  },

  tomeForm: function (id) {
    var tome;
    if (id) {
      tome = this.tomes.getOrFetch(id);
    } else {
      tome = new GoodTomes.Models.Tome();
    }
    var view = new GoodTomes.Views.TomeForm({ model: tome, collection: this.tomes });
    this._swapView(view);
  },

  usersIndex: function () {
    var view = new GoodTomes.Views.UsersIndex({ collection: this.users });
    this._swapView(view);
  },

  userShow: function (id) {
    var user = this.users.getOrFetch(id);
    var view = new GoodTomes.Views.UserShow({ model: user });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
