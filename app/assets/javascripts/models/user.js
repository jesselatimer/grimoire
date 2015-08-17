GoodTomes.Models.User = Backbone.Model.extend ({
  urlRoot: "/api/users",

  parse: function (response) {
    if (response.shelves) {
      this.shelves().set(response.shelves);
      this.shelves().each(function (shelf) {
        if (shelf.attributes.tomes) {
          shelf.tomes().set(shelf.attributes.tomes);
        }
      });
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
