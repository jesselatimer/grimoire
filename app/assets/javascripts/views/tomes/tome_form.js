GoodTomes.Views.TomeForm = Backbone.View.extend ({
  template: JST["tomes/tome_form"],
  class: "form-wrapper",

  events: {
    "click .submit" : "submitHandler"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ tome: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  submitHandler: function (e) {
    e.preventDefault();

    var formData = $(e.currentTarget.form).serializeJSON();
    this.model.set(formData);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model, { merge: true });
        Backbone.history.navigate("/tomes/" + this.model.id, { trigger: true });
      }.bind(this)
    });
  }
});
