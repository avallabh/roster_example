if (typeof PC == "undefined" || !PC) {
  var PC = {};
}

PC.League = Ember.Application.create({
  LOG_TRANSITIONS: true
});

PC.League.Router.map(function() {
  this.route("home", { path: "/" });
  this.resource('team', { path: '/team/:team_id' });
});

PC.League.HomeRoute = Ember.Route.extend({
  model: function() {
    return ['Coed', 'Saturdays 9am-3pm', 'at Park Center'];
  },
  setupController: function(controller, model) {
    controller.set('info', model);
  }
});

// PC.BballLeague.HomeController = Ember.Controller.extend({
//       info: ['Coed', 'Saturdays 9am-3pm', 'at Park Center'];
//  });
