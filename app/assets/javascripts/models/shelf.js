GoodTomes.Models.Shelf = Backbone.Model.extend ({
  urlRoot: "/api/shelves",

  tomes: function () {
    if (!this._tomes) {
      this._tomes = new GoodTomes.Collections.Tomes();
    }
    return this._tomes;
  },

  parse: function (response) {
    if (response.tomes) {
      this.tomes().set(response.tomes);
    }
    return response;
  }
});
