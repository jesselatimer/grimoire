GoodTomes.Views.ReviewForm = Backbone.View.extend ({
  template: JST["reviews/review_form"],
  tagName: "form",

  events: {
    "submit" : "createReview"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ review: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  createReview: function (e) {
    e.preventDefault();
  }
});
