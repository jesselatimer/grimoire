GoodTomes.Views.TomeForm = Backbone.View.extend ({
  template: JST["tomes/tome_form"],
  class: "form-wrapper",

  events: {
    "click .submit" : "submitHandler",
    "click .upload-image" : "upload"
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
  },

  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      var data = result[0];
      this.model.set({
        cover_url: data.url,
        image600: data.eager[1].url,
        image300: data.eager[0].url,
        image75: data.eager[2].url
      });
    }.bind(this));
  }
});
