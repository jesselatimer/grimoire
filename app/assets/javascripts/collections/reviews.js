GoodTomes.Collections.Reviews = Backbone.Collection.extend ({
  model: GoodTomes.Models.Review,
  url: "/api/reviews",
  comparator: function (review) {
    return review.get("created_at");
  }
});
