GoodTomes.Views.ReviewsIndex = Backbone.CompositeView.extend ({
  template: JST["reviews/reviews_index"],

  initialize: function (options) {
    this.showPage = options.showPage;

    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addReviewSubview);
    this.listenTo(this.collection, 'remove', this.removeReviewSubview);
    this.collection.each(this.addReviewSubview.bind(this));

    this.attachReviewForm();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addReviewSubview: function (review) {
    var subview = new GoodTomes.Views.ReviewShow({ model: review, showPage: this.showPage });
    this.addSubview('.reviews-index', subview, true);
  },

  removeReviewSubview: function (review) {
    this.removeModelSubview('.reviews-index', review);
  },

  attachReviewForm: function () {
    var review = new GoodTomes.Models.Review();
    var subview = new GoodTomes.Views.ReviewForm({ model: review, collection: this.collection });
    this.addSubview('.review-form', subview);
  }
});
