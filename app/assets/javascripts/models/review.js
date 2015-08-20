GoodTomes.Models.Review = Backbone.Model.extend ({
  urlRoot: "/api/reviews",

  author: function () {
    if (!this._author) {
      this._author = new GoodTomes.Models.User();
    }
    return this._author;
  },

  tome: function () {
    if (!this._tome) {
      this._tome = new GoodTomes.Models.Tome();
    }
    return this._tome;
  },

  parse: function (response) {
    if (response.author) {
      this.author().set(response.author);
      delete response.author;
    }
    if (response.tome) {
      this.tome().set(response.tome);
      delete response.tome;
    }
    return response;
  }
});
