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
    debugger
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
      if (result[0]) {
        var data = result[0];
        this.$('input[name="user[image_url]"]').val(data.url);
        this.$('input[name="user[image600]"]').val(data.eager[1].url);
        this.$('input[name="user[image300]"]').val(data.eager[0].url);
        this.$('input[name="user[image75]"]').val(data.eager[2].url);
        this.$('.profile-image img').attr("src", data.eager[0].url);
      }
    }.bind(this));
  }
});
