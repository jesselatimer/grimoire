GoodTomes.Views.TomesIndexItem = Backbone.View.extend ({
  template: JST["tomes/tomes_index_item"],
  className: "index-item-wrapper col-sm-4 col-md-3",

  render: function () {
    var renderedContent = this.template({ tome: this.model });
    this.$el.html(renderedContent);

    this.$('.avg-rating').barrating({
      theme: 'fontawesome-stars',
      initialRating: this.model.get("avg_rating") || 0,
      readonly: true
    });
    // Hide the "0" field for empty reviews.
    this.$('.br-widget a[data-rating-value="0"]').css("display", "none");
    return this;
  }
});
