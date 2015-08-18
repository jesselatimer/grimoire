GoodTomes.Models.Review = Backbone.Model.extend ({
  urlRoot: "/api/reviews",

  author: function () {
    if (!this._author) {
      this._author = new GoodTomes.Models.User();
    }
    return this._author;
  }
});
