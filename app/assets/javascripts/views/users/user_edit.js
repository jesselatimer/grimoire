GoodTomes.Views.UserEdit = Backbone.View.extend ({
  template: JST["users/user_edit"],
  className: "user-edit-wrapper",

  events: {
    "click .submit-edits" : "submitEdits",
    "click .cancel-edits" : "cancelEdits"
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
  }
});
