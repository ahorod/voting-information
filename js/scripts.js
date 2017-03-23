$(document).ready(function() {
  var age = parseInt(prompt("Enter your current age."));
  if (age >= 18) {
    $("#infoOver18").show();
  } else {
    $("#infoUnder18").show();
  }
});
