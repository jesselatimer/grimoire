GoodTomes.Views.UserReviewsIndex = Backbone.CompositeView.extend ({
  template: JST["reviews/user_reviews_index"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addReviewSubview);
    this.listenTo(this.collection, "remove", this.removeReviewSubview);
    this.collection.each(this.addReviewSubview.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addReviewSubview: function (review) {
    var subview = new GoodTomes.Views.UserReviewShow({ model: review, user: this.model });
    this.addSubview('.reviews-index', subview, true);
  },

  removeReviewSubview: function (review) {
    this.removeModelSubview('.reviews-index', review);
  }
});
