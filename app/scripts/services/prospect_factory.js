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
    },
    addNote: function(pid, text) {
      var note = {text: text, prospectId: pid};
      prospects.$child(pid).$child('notes').$add(note);
    },
    removeNote: function(noteId, pid) {
      prospects.$child(pid).$child('notes').$remove(noteId);
    },
    raiseRank: function(pid) {
      prospects.$child(pid).$child('rank').$transaction(function (rank) {
        if (!rank) {
          return 1;
        } else {
          return rank+1;
        }
      });
    },
    lowerRank: function(pid) {
      prospects.$child(pid).$child('rank').$transaction(function (rank) {
        if (!rank) {
          return -1;
        } else {
          return rank-1;
        }
      });
    },
  };
  return Prospect;
});