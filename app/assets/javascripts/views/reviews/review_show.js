GoodTomes.Views.ReviewShow = Backbone.CompositeView.extend ({
  template: JST["reviews/review_show"],
  className: "review",

  events: {
    "click .delete-review-button" : "deleteReview"
  },

  initialize: function (options) {
    this.tome = options.tome;

    if (CURRENT_USER.id === this.model.author().id) {
      this.$el.addClass("current-user-review");
    }
    this.showPage = options.showPage;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ review: this.model, showPage: this.showPage });
    this.$el.html(renderedContent);
    this.$('.rating').barrating({
      theme: 'fontawesome-stars',
      initialRating: this.model.get("rating"),
      readonly: true
    });
    return this;
  },

  deleteReview: function (e) {
    bootbox.confirm("Are you sure you want to delete your review of " + this.tome.escape("title") + "?", function (result) {
      if (result) {
        this.model.destroy();
        this.remove();

        // Fetch tome to update avg_rating
        this.tome.fetch();
      }
    }.bind(this));
  }
});
