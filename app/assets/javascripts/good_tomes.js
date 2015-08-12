window.GoodTomes = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // Initialize both primary collections
    var tomes = new GoodTomes.Collections.Tomes();
    var users = new GoodTomes.Collections.Users();

    var router = new GoodTomes.Routers.Router({
      $rootEl: $('content'),
      tomes: tomes,
      users: users
    });

    // Pass in the router to listener for navigation, to change "active" class.
    var header = new GoodTomes.Views.HeaderShow({
      router: router
    });

    $('header').html(header.$el);
    header.render();

    Backbone.history.start();
  }
};

$(document).ready(function(){
  GoodTomes.initialize();
});
