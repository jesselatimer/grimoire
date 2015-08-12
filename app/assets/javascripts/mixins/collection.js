_.extend(Backbone.Collection.prototype, {
  getOrFetch: function (id) {
    var model = this.get(id);

    if (model) {
      model.fetch();
    } else {
      model = new this.model({ id: id });
      this.add(model);
      model.fetch({
        error: function () {
          this.remove(model);
        }.bind(this)
      });
    }
    return model;
  }
});
