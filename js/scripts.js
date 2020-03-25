$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();


    $(".firstName").append(firstName);
    $(".lastName").append(lastName);

    $("#letter").show();

    event.preventDefault();
  });
});