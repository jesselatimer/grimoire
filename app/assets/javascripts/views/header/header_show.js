GoodTomes.Views.HeaderShow = Backbone.View.extend ({
  template: JST["header/header_show"],

  initialize: function (options) {
    this.listenTo(CURRENT_USER, "sync", this.render);
    this.auth_token = $('meta[name="csrf-token"]').attr("content");
    this.router = options.router;
    this.listenTo(this.router, "route", this.handleRoute);
  },

  render: function () {
    var renderedContent = this.template({ auth_token: this.auth_token });
    this.$el.html(renderedContent);
    return this;
  },

  handleRoute: function (routeName, params) {
    this.$el.find(".active").removeClass("active");
    this.$el.find("." + routeName).addClass("active");
  }
});
