GoodTomes.Models.User = Backbone.Model.extend ({
  urlRoot: "/api/users",

  parse: function (response) {
    if (response.shelves) {
      this.shelves().set(response.shelves, { parse: true });
      delete response.shelves;
    }
    return response;
  },

  shelves: function () {
    if (!this._shelves) {
      this._shelves = new GoodTomes.Collections.Shelves([], { user: this });
    }
    return this._shelves;
  }
});
