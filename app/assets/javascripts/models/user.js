GoodTomes.Models.User = Backbone.Model.extend ({
  urlRoot: "/api/users",

  parse: function (response) {
    if (response.shelves) {
      this.shelves().set(response.shelves, { parse: true });
      delete response.shelves;
    }
    if (response.reviews) {
      this.reviews().set(response.reviews, { parse: true });
      delete response.reviews;
    }
    return response;
  },

  shelves: function () {
    if (!this._shelves) {
      this._shelves = new GoodTomes.Collections.Shelves([], { user: this });
    }
    return this._shelves;
  },

  reviews: function () {
    if (!this._reviews) {
      this._reviews = new GoodTomes.Collections.Reviews();
    }
    return this._reviews;
  }
});
