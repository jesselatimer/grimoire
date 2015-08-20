GoodTomes.Views.TomeShow = Backbone.CompositeView.extend ({
  template: JST["tomes/tome_show"],
  className: "tome-show-wrapper container-fluid",

  events: {
    "click .add-to-shelf" : "toggleButton",
    "click .remove-from-shelf" : "removeFromShelf",
    "click .exit-button" : "back",
    "submit .review-form" : "resetAvgRating"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);

    this.listenTo(CURRENT_USER.shelves(), "add", this.addShelfButton);
    this.listenTo(CURRENT_USER.shelves(), "remove", this.removeShelfButton);
    CURRENT_USER.shelves().each(this.addShelfButton.bind(this));

    this.attachReviewsIndex();
  },

  render: function () {
    var renderedContent = this.template({ tome: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();

    this.$('.avg-rating').barrating({
      theme: 'fontawesome-stars',
      initialRating: this.model.get("avg_rating") || 0,
      readonly: true
    });
    // Hide the "0" field for empty reviews.
    this.$('.br-widget a[data-rating-value="0"]').css("display", "none");
    return this;
  },

  toggleButton: function (e) {
    this.$('[disabled] i').remove();
    this.$('[disabled]').attr('disabled', false);
    this.$('.selected').removeClass('selected');

    this.$(e.currentTarget).attr('disabled', true);
    this.$(e.currentTarget).addClass('selected');
    this.$(e.currentTarget).parent().find('.remove-from-shelf').addClass('selected');
    this.$(e.currentTarget).prepend('<i class="fa fa-check"></i>');
  },

  removeFromShelf: function (e) {
    bootbox.confirm("Are you sure you want to remove " + this.model.escape("title") + " from your shelves?", function (result) {
      if (result) {
        this.model.shelving().destroy();
        this.model.shelving().clear();

        this.$('[disabled] i').remove();
        this.$('[disabled]').attr('disabled', false);
        this.$('.selected').removeClass('selected');
      }
    }.bind(this));
  },

  addShelfButton: function (shelf) {
    var subview = new GoodTomes.Views.TomeShowShelfButton({ tome: this.model, shelf: shelf });
    this.addSubview('.add-to-shelf-wrapper', subview);
  },

  removeShelfButton: function (shelf) {
    this.removeModelSubview('.add-to-shelf-wrapper', shelf);
  },

  attachReviewsIndex: function () {
    var subview = new GoodTomes.Views.ReviewsIndex({ model: this.model, collection: this.model.reviews() });
    this.addSubview('.reviews-wrapper', subview);
  },

  resetAvgRating: function () {
    this.model.fetch();
  },

  back: function () {
    if (document.referrer.indexOf(window.location.host) !== -1) {
      window.history.back();
    } else {
      window.location.href = '#/tomes';
    }
  }
});
