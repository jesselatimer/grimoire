GoodTomes.Views.UserReviewShow = Backbone.View.extend ({
  template: JST["reviews/user_review_show"],
  className: "review well",

  events: {
    "click .delete-review-button" : "deleteReview",
    "click .edit-review-button" : "editReview"
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
    setTimeout(function () { this.$el.css("opacity", 1); }.bind(this), 50);
    return this;
  },

  deleteReview: function () {
    bootbox.confirm("Are you sure you want to delete your review of " + this.model.tome().escape("title") + "?", function (result) {
      if (result) {
        this.model.destroy({
          success: function () {
            this.remove();
          }.bind(this)
        });
      }
    }.bind(this));
  },

  editReview: function () {
    Backbone.history.navigate("/tomes/" + this.model.tome().id + "/editreview", { trigger: true });
  }
});
