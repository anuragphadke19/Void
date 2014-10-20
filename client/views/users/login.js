Template.login.events = {
  'click button[type=submit]': function(event){
    event.preventDefault();
    var username = $('#email').val();
    var password = $('#password').val();
    Meteor.loginWithPassword(username, password, function(error){
      if(error){
        FlashMessages.sendError(error.reason);
      }else{
        Router.go('/');
        FlashMessages.sendSuccess('You are now logged in.');
      }
    });
  }
};