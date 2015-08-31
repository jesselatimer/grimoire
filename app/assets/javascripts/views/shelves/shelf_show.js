GoodTomes.Views.ShelfShow = Backbone.CompositeView.extend ({
  template: JST["shelves/shelf_show"],
  className: "shelf panel panel-default",

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addTomeView);
    this.listenTo(this.collection, "remove", this.removeTomeView);
    this.collection.each(this.addTomeView.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ shelf: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    setTimeout(function () { this.$el.css("opacity", 1); }.bind(this), 50);
    return this;
  },

  addTomeView: function (tome) {
    var subview = new GoodTomes.Views.ShelfTomeItem({ model: tome });
    this.addSubview('.shelf-items', subview);
  },

  removeTomeView: function (tome) {
    this.removeModelSubview('.shelf-items', tome);
  }
});
