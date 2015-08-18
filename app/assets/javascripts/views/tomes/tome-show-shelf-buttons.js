GoodTomes.Views.TomeShowShelfButton = Backbone.View.extend ({
  template: JST["tomes/tome_show_shelf_button"],
  className: "shelf-button",

  events: {
    "click .add-to-shelf" : "addToShelf"
  },

  initialize: function (options) {
    this.tome = options.tome;
    this.shelf = options.shelf;
    this.listenTo(this.tome, "sync", this.render);
    this.listenTo(this.shelf, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ shelf: this.shelf });
    this.$el.html(renderedContent);
    if (this.tome.shelving().get("shelf_id") === this.shelf.id) {
      this.$('.add-to-shelf').attr("disabled", true);
      this.$('.add-to-shelf').prepend('<i class="fa fa-check"></i>');
      this.$('.add-to-shelf').addClass('selected');
      this.$('.remove-from-shelf').addClass('selected');
    }
  },

  addToShelf: function (e) {
    if (this.tome.isShelved()) {
      this.unShelve();
    }
    this.tome.shelving().save({ shelf_id: this.shelf.id, tome_id: this.tome.id});
  },

  unShelve: function () {
    this.tome.shelving().destroy();
    this.tome.shelving().clear();
  }
});
