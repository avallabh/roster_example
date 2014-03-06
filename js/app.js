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

PC.League.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

PC.League.Team = DS.Model.extend({
  name: DS.attr('string'),
  colors: DS.attr('string')
});

// Set up controller from the route handler
PC.League.HomeRoute = Ember.Route.extend({
   model: function(){
     return ['Coed', 'Saturdays 9am-3pm', 'at Park Center'];
   },
   setupController: function(controller, model){
     controller.set('info', model);
     controller.set('teams', PC.League.Team.find());
   }
 });

// Override default controller
// PC.League.HomeController = Ember.Controller.extend({
//       info: ['Coed', 'Saturdays 9am-3pm', 'at Park Center'];
//  });

PC.League.Team.FIXTURES = [{
  id: 1,
  name: 'Celtics',
  colors: 'Green, White'
}, {
  id: 2,
  name: 'Lakers',
  colors: 'Yellow, Black'
}, {
  id: 3,
  name: 'Bulls',
  colors: 'Red, Black'
}, {
  id: 4,
  name: 'Mavericks',
  colors: 'Blue, White'
}, {
  id: 5,
  name: 'Spurs',
  colors: 'Black, Gray, White'
}];
