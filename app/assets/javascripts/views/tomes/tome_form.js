GoodTomes.Views.TomeForm = Backbone.View.extend ({
  template: JST["tomes/tome_form"],
  className: "new-tome-wrapper",

  events: {
    "click .submit-tome" : "submitHandler",
    "click .upload-image" : "upload",
    "click .cancel-tome" : "cancel"
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
      if (result[0]) {
        var data = result[0];
        this.$('input[name="tome[cover_url]"]').val(data.url);
        this.$('input[name="tome[image600]"]').val(data.eager[1].url);
        this.$('input[name="tome[image300]"]').val(data.eager[0].url);
        this.$('input[name="tome[image75]"]').val(data.eager[2].url);
        this.$('.cover-image img').attr("src", data.eager[0].url);
      }
    }.bind(this));
  },

  cancel: function () {
    if (document.referrer.indexOf(window.location.host) !== -1) {
      window.history.back();
    } else {
      window.location.href = '#/tomes';
    }
  }
});
