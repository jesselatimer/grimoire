GoodTomes.Views.UserShow = Backbone.CompositeView.extend ({
  template: JST["users/user_show"],
  className: "user-show-wrapper",

  events: {
    "click .exit-button" : "back"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.shelves(), "add", this.addShelfView);
    this.listenTo(this.model.shelves(), "remove", this.removeShelfView);
    this.model.shelves().each(this.addShelfView.bind(this));

    this.attachReviewsIndex();
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  attachReviewsIndex: function () {
    var subview = new GoodTomes.Views.UserReviewsIndex({ model: this.model, collection: this.model.reviews() });
    this.addSubview('.reviews-wrapper', subview);
  },

  back: function () {
    if (document.referrer.indexOf(window.location.host) !== -1) {
      window.history.back();
    } else {
      window.location.href = '#/users';
    }
  },

  addShelfView: function (shelf) {
    var subview = new GoodTomes.Views.ShelfShow({ model: shelf, collection: shelf.tomes() });
    this.addSubview('.shelves', subview);
  },

  removeShelfView: function (shelf) {
    this.removeModelSubview('.shelves .row', shelf);
  }

});
