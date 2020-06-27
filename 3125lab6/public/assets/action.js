$(document).ready(function(){

  $('form').on('submit', function(){

       var item = $('form input');
       console.log(item.serializeArray());

      $.ajax({
        type: 'POST',
        url: '/index',
        data: $(this).serializeArray(),
        success: function(data){
          // do something with the data via front-end framework
          // Make the submit button red, disabled and saying Thank you
          $("#submitButton").css("background-color", "red");
          $("#submitButton").prop("disabled", "true");
          $("#submitButton").text("Thank you!");
        }
      });
      return false;
  });
});
