Template.forgot.events = {
  'click button[type=submit]': function(e){
    e.preventDefault();

    var options = {
      email: $('#email').val()
    };

    Accounts.forgotPassword(options, function(error){
      if(error){
        FlashMessages.sendError(error.reason);
      }else{
        Router.go('/login');
        FlashMessages.sendSuccess("Password reset link sent!");
      }
    });

  }
};