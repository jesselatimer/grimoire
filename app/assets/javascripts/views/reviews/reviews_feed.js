GoodTomes.Views.ReviewsFeed = Backbone.CompositeView.extend ({
  template: JST["reviews/reviews_feed"],
  className: "review-feed clear-fix",

  initialize: function (options) {
    this.tomes = options.tomes;

    this.collection.fetch();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addReviewSubview);
    this.listenTo(this.collection, "remove", this.removeReviewSubview);
    this.collection.each(this.addReviewSubview.bind(this));
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSortedSubviews();
    this.$('[data-toggle="tooltip"]').tooltip();
    return this;
  },

  addReviewSubview: function (review) {
    var subview = new GoodTomes.Views.ReviewFeedItem({ model: review, tomes: this.tomes });
    this.addSubview('.reviews-index', subview, true);
  },

  removeReviewSubview: function (review) {
    this.removeModelSubview('.reviews-index', review);
  }
});
