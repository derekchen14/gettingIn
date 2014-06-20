'use strict';

app.factory('Prospect', function ($firebase, FIREBASE_URL) {
	var endpoint = new Firebase(FIREBASE_URL+'prospects');
  var prospects = $firebase(endpoint);
  // $resource('https://shining-fire-8350.firebaseIO.com/prospects/:id.json');
  var Prospect = {
    all: prospects,
    create: function(person) {
      return prospects.$add(person);
    },
    find: function(id) {
      return prospects.$child(id);
    },
    delete: function(id) {
      return prospects.$remove(id);
    }
  };
  return Prospect;
});