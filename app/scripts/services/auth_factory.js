'use strict';

app.factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseSimpleLogin(ref);

  var Auth = {
    signup: function (user) {
      return auth.$createUser(user.email, user.password);
    },
    isSignedIn: function () {
      return auth.user !== null;
    },
    login: function(user) { //signIn
      return auth.$login('password', user);
    },
    logout: function () { //signOut
      auth.$logout();
    }
  };

  $rootScope.isSignedIn = function () {
    return Auth.isSignedIn();
  };

  return Auth;
});
