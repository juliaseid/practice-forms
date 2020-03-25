$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();

    $(".firstName").append(firstName);
    $(".lastName").append(lastName);

    $("#letter").show();
    $("formTwo").show();

  event.preventDefault();

  $("#formTwo").submit(function(event) {
    var yourDream = $("input#yourDream").val();  
      
    $(".shoutDream").append(yourDream.toUpperCase());

    $("#dreamScream").show();
  

  event.preventDefault();
  });
  });
});