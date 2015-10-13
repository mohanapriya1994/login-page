$(document).ready(function() {
  $(".password").on("keydown",function() {
    var password = $(this).val();
    checkPassword(password);
  });
});

function checkPassword(password) {
  var strength = 0;
  var points = 20;
  var upperCase = /[A-Z]/g;
  var lowerCase = /[a-z]/g;
  var number = /[0-9]/g;
  var specialCharacter = /[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/g; 
  if (password.length >= 6) {
    strength += points;
  }
  if (password.match(upperCase) != null) {
    strength += points;
  }
   if (password.match(lowerCase) != null) {
    strength += points;
  }
   if (password.match(number) != null) {
    strength += points;
  }
   if (password.match(specialCharacter) != null) {
    strength += points;
  }
  if (password == "") {
    $(".check").text("your password is empty");
  }
  else {
    var message = ["easy to guess","weak","average","strong","very strong"];
    var index = (strength-20)/20;
    console.log(strength);
    if (index == -1) {
      $(".check").text("Easy to guess");
    }
    else {
      $(".check").text(message[index]); 
    } 
    var str = [{"width":"0%"},{"width":"30%"},{"width":"60%"},{"width":"90%"},{"width":"100%"}];
    var progress = ["","progress-bar-danger","progress-bar-warning","progress-bar-warning","progress-bar-success"];
    $(".pstrength").removeClass(progress[index-1]).addClass(progress[index]).css(str[index]);
  }
};
