GoodTomes.Routers.Router = Backbone.Router.extend ({
  routes: {
    ""                       : "reviewsFeed",
    "tomes"                  : "tomesIndex",
    "tomes/new"              : "tomeForm",
    "tomes/:id"              : "tomeShow",
    "tomes/:id/edit"         : "tomeForm",
    "tomes/:id/editreview"   : "editTomeReview",
    "users"                  : "usersIndex",
    "users/:id"              : "userShow",
    "users/:id/edit"         : "userEdit",
    "feed"                   : "reviewsFeed"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = options.users;
    this.tomes = options.tomes;
    this.users.fetch();
    this.tomes.fetch();
  },

  tomesIndex: function () {
    this.tomes.fetch({ reset: true });
    var view = new GoodTomes.Views.TomesIndex({ collection: this.tomes });
    this._swapView(view);
  },

  tomeShow: function (id) {
    var tome = this.tomes.getOrFetch(id);
    var view = new GoodTomes.Views.TomeShow({ model: tome });
    this._swapView(view);
    $(document).scrollTop(0);
  },

  editTomeReview: function (id) {
    var tome = this.tomes.getOrFetch(id);
    var view = new GoodTomes.Views.TomeShow({ model: tome, editReview: true });
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
    $(document).scrollTop(0);
  },

  usersIndex: function () {
    this.users.fetch();
    var view = new GoodTomes.Views.UsersIndex({ collection: this.users });
    this._swapView(view);
  },

  userShow: function (id) {
    var user = this.users.getOrFetch(id);
    var view = new GoodTomes.Views.UserShow({ model: user });
    this._swapView(view);
    $(document).scrollTop(0);
  },

  userEdit: function (id) {
    if (parseInt(id) === CURRENT_USER.id) {
      var view = new GoodTomes.Views.UserEdit({ model: CURRENT_USER });
      this._swapView(view);
    } else {
      bootbox.alert("You must be logged on to do that.");
      Backbone.history.navigate("#/users/" + id);
    }
  },

  reviewsFeed: function () {
    var reviews = new GoodTomes.Collections.Reviews();
    var view = new GoodTomes.Views.ReviewsFeed({ collection: reviews, tomes: this.tomes });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
