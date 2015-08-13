_.extend(Backbone.Collection.prototype, {
  getOrFetch: function (id) {
    var collection = this;
    var model = collection.get(id);

    if (model) {
      model.fetch();
    } else {
      model = new collection.model({ id: id });
      collection.add(model);
      model.fetch({
        error: function () {
          collection.remove(model);
        }
      });
    }
    return model;
  }
});
