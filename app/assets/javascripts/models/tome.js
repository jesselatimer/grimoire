GoodTomes.Models.Tome = Backbone.Model.extend ({
  urlRoot: "/api/tomes",

  shelving: function () {
    if (!this._shelving) {
      this._shelving = new GoodTomes.Models.Shelving();
    }
    return this._shelving;
  },

  author: function () {
    if (!this._author) {
      this._author = new GoodTomes.Models.User();
    }
    return this._author;
  },

  isShelved: function () {
    return !this.shelving().isNew();
  },

  parse: function (response) {
    if (response.shelving) {
      this.shelving().set(response.shelving);
      delete response.shelving;
    }
    if (response.author) {
      this.author().set(response.author);
      delete response.author;
    }
    return response;
  }
});
