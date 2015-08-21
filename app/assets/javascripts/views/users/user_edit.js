GoodTomes.Views.UserEdit = Backbone.View.extend ({
  template: JST["users/user_edit"],
  className: "user-edit-wrapper",

  events: {
    "click .submit-edits" : "submitEdits",
    "click .cancel-edits" : "cancelEdits",
    "click .upload-image" : "upload"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  submitEdits: function (e) {
    e.preventDefault();

    var formData = $(e.currentTarget.form).serializeJSON();
    this.model.set(formData);
    this.model.save({}, {
      success: function () {
        Backbone.history.navigate("/users/" + this.model.id, { trigger: true });
      }.bind(this)
    });
  },

  cancelEdits: function () {
    Backbone.history.navigate("/users/" + this.model.id, { trigger: true });
  },

  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      var data = result[0];
      this.model.set({
        image_url: data.url,
        image600: data.eager[1].url,
        image300: data.eager[0].url,
        image75: data.eager[2].url
      });
    }.bind(this));
  }
});
