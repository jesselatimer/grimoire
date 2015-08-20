GoodTomes.Views.UserReviewShow = Backbone.View.extend ({
  template: JST["reviews/user_review_show"],
  className: "review",

  events: {
    "click .delete-review-button" : "deleteReview"
  },

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ review: this.model, user: this.user });
    this.$el.html(renderedContent);
    this.$('.rating').barrating({
      theme: 'fontawesome-stars',
      initialRating: this.model.get("rating"),
      readonly: true
    });
    return this;
  },

  deleteReview: function (e) {
    bootbox.confirm("Are you sure you want to delete your review of " + this.model.tome().escape("title") + "?", function (result) {
      if (result) {
        this.model.destroy({
          success: function () {
            this.remove();
          }.bind(this)
        });
      }
    }.bind(this));
  }
});
