GoodTomes.Views.ReviewForm = Backbone.View.extend ({
  template: JST["reviews/review_form"],
  tagName: "form",
  className: "panel-body",

  events: {
    "submit" : "createReview"
  },

  initialize: function (options) {
    this.tome = options.tome;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ review: this.model });
    this.$el.html(renderedContent);
    this.$('.form-errors').css("display", "none");
    this.$('#rating').barrating({ theme: 'fontawesome-stars' });
    this.$('#rating').barrating('set', this.model.get("rating"));
    return this;
  },

  createReview: function (e) {
    e.preventDefault();

    var formData = $(e.currentTarget).serializeJSON();
    this.model.set(formData);
    this.model.attributes.review.author_id = CURRENT_USER.id;
    this.model.attributes.review.tome_id = this.tome.id;

    this.model.save({}, {
      success: function () {
        this.$el.parent().css("display", "none");
        this.collection.add(this.model, { merge: true });
      }.bind(this),

      error: function (_, response) {
        this.$('.form-errors').css("display", "block");
        this.$('.form-errors').html(response.responseJSON[0]);
      }.bind(this)
    });
  }
});
