GoodTomes.Views.ReviewShow = Backbone.CompositeView.extend ({
  template: JST["reviews/review_show"],
  className: "review well",

  events: {
    "click .delete-review-button" : "deleteReview"
  },

  initialize: function (options) {
    this.tome = options.tome;

    if (CURRENT_USER.id === this.model.author().id) {
      this.$el.addClass("current-user-review");
    }
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ review: this.model });
    this.$el.html(renderedContent);
    this.$('.rating').barrating({
      theme: 'fontawesome-stars',
      initialRating: this.model.get("rating"),
      readonly: true
    });
    setTimeout(function () { this.$el.css("opacity", 1); }.bind(this), 50);
    return this;
  },

  deleteReview: function (e) {
    bootbox.confirm("Are you sure you want to delete your review of " + this.tome.escape("title") + "?", function (result) {
      if (result) {
        this.model.destroy({
          success: function () {
            this.remove();
            // Fetch tome to update avg_rating
            this.tome.unset("avg_rating");
            this.tome.fetch();
          }.bind(this)
        });
      }
    }.bind(this));
  }
});
