GoodTomes.Views.TomeShow = Backbone.CompositeView.extend ({
  template: JST["tomes/tome_show"],
  className: "tome-show-wrapper container-fluid",

  events: {
    "click .add-to-shelf" : "toggleButton",
    "click .remove-from-shelf" : "removeFromShelf",
    "click .exit-button" : "back"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(CURRENT_USER.shelves(), "add", this.addShelfButton);
    this.listenTo(CURRENT_USER.shelves(), "remove", this.removeShelfButton);
    CURRENT_USER.shelves().each(this.addShelfButton.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ tome: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.attachRemoveShelfButton();
    return this;
  },

  toggleButton: function (e) {
    this.$('[disabled] i').remove();
    this.$('[disabled]').attr('disabled', false);
    this.$(e.currentTarget).attr('disabled', true);
    this.$(e.currentTarget).prepend('<i class="fa fa-check"></i>');
    this.attachRemoveShelfButton();
  },

  attachRemoveShelfButton: function () {
    if (!this.model.shelving().isEmpty() && this.$('.remove-from-shelf').length === 0) {
      var button = $('<button type="button" class="remove-from-shelf btn btn-danger">Remove from Shelves</button>');
      this.$('.shelf-wrapper').append(button);
    }
  },

  removeFromShelf: function (e) {
    this.$('.remove-from-shelf').remove();
    this.model.shelving().destroy();
    this.model.shelving().clear();
    this.toggleButton(e);
  },

  addShelfButton: function (shelf) {
    var subview = new GoodTomes.Views.TomeShowShelfButton({ tome: this.model, shelf: shelf });
    this.addSubview('.add-to-shelf-wrapper', subview);
  },

  removeShelfButton: function (shelf) {
    this.removeModelSubview('.add-to-shelf-wrapper', shelf);
  },

  back: function () {
    if (document.referrer.indexOf(window.location.host) !== -1) {
      window.history.back();
    } else {
      window.location.href = '#/tomes';
    }
  }
});
