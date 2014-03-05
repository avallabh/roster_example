App = Ember.Application.create();

App.Router.map(function() {
  // routes
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['foo', 'bar']
  }
});
