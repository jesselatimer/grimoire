GoodTomes.Routers.Router = Backbone.Router.extend ({
  routes: {
    "" : "TomesIndex"
  },

  initialize: function (option) {
    this.users = options.users;
    this.tomes = options.tomes;
  },

  TomesIndex: function () {
    var view = new GoodTomes.Views.TomesIndex({ collection: this.tomes });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
