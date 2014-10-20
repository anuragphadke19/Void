Template.signup.events = {
  'click button[type=submit]': function(event){
    event.preventDefault();

    var user = {
      email: $('#email').val(),
      password: $('#password').val(),
    };
    //check if both the password and confirmPassword match. Print a message if they don't and set both password blank
    if (user.password !== $('#confirmPassword').val()){
      FlashMessages.sendWarning("Your passwords don't match try again");
      $('#password').val('');
      $('#confirmPassword').val('');
    }else{
      //check username and password only if the password and confirm password match
      if(!user.email || !user.password){
        FlashMessages.sendWarning('Please fill in all fields');
      }else{
        Accounts.createUser(user, function(error){
          if(error){
            FlashMessages.sendError(error.reason);
          }else{
            Router.go('/');
            FlashMessages.sendSuccess('Thanks for signing up!');
          }  
        });
      }
    }
  }
};