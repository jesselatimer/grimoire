GoodTomes.Views.ReviewsIndex = Backbone.CompositeView.extend ({
  template: JST["reviews/reviews_index"],

  events: {
    "click .edit-review-button" : "expandReviewForm",
    "click .new-review-button" : "expandReviewForm",
    "click .cancel-form" : "cancelForm"
  },

  initialize: function (options) {
    this.editReview = options.editReview;
    this.collection.sort();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.updateViews);
    this.listenTo(this.collection, 'add remove', this.render);
    this.listenTo(this.collection, 'add', this.addReviewSubview);
    this.listenTo(this.collection, 'remove', this.removeReviewSubview);
    this.collection.each(this.addReviewSubview.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ tome: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.checkEditReview();
    return this;
  },

  checkEditReview: function () {
    if (this.editReview) {
      if (this.$('.review-form')) {
        this.expandReviewForm();
        setTimeout(function () {
          this.editReview = false;
        }.bind(this), 500);
      }
    }
  },

  addReviewSubview: function (review) {
    var subview = new GoodTomes.Views.ReviewShow({ model: review, tome: this.model });
    this.addSubview('.reviews-index', subview, true);
    this.updateViews();
  },

  removeReviewSubview: function (review) {
    this.removeModelSubview('.reviews-index', review);
    this.updateViews();
  },

  updateViews: function () {
    var updated = false;
    this.collection.each(function (review) {
      if (review.author().id === CURRENT_USER.id) {
        this.$('.new-review-button').remove();
        this.addUserReview(review);
        this.addReviewForm(review);
        updated = true;
      }
    }.bind(this));
    if (!updated) {
      this.addReviewForm();
      this.addNewReviewButton();
    }
  },

  addUserReview: function (review) {
    this._userReviewView && this.removeSubview('.user-review', this._userReviewView);
    this.removeModelSubview('.reviews-index', review);
    this._userReviewView = new GoodTomes.Views.ReviewShow({ model: review, tome: this.model });
    this.addSubview('.user-review', this._userReviewView, true);
  },

  addReviewForm: function (review) {
    if (!review) { review = new GoodTomes.Models.Review(); }

    this._formView && this.removeSubview('.review-form', this._formView);
    this._formView = new GoodTomes.Views.ReviewForm({
      tome: this.model, model: review, collection: this.collection
    });
    this.addSubview('.review-form', this._formView);
  },

  collapseReviewForm: function (callback) {
    this.$('.review-form').css("display", "none");
    // this.$('.review-form').slideUp(400, callback);
  },

  expandReviewForm: function () {
    this.$('.new-review-button-wrapper').remove();
    this.$('.review-form').css("display", "block");
    // this.$('.review-form').slideDown();
  },

  addNewReviewButton: function () {
    var button = $('<p class="new-review-button-wrapper">You haven\'t reviewed ' + this.model.escape("title") + '. <a class="new-review-button">Review this Grimoire!</a></p>');
    this.$('.user-review').html(button);
  },

  cancelForm: function () {
    this._formView.render();
    this.collapseReviewForm(this.updateViews.bind(this));
  }
});
