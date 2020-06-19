

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function cardnumber(txtdebit){
  var a = document.getElementById(txtdebit).value;
  console.log(a);
  var cardno = /^([0-9]{16})$/;
  if(cardno.test(a))
        {
      return true;
        }
      else
        {
        return false;
        }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates_methdy = ["2020-06-22","2020-06-29","2020-07-06"]
var unavailableDates_james =  ["2020-06-29","2020-07-07","2020-07-10"]
const setDateFormat = "yy-mm-dd";


function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    else if (document.getElementById("designer").value == "methdy"){
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates_methdy.indexOf(string) == -1 ]

    }else if(document.getElementById("designer").value == "james"){
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates_james.indexOf(string) == -1 ]

}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#booked").on("click", function(){
      let name = document.getElementById("name").value;

        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("XXX-XXX-XXXX");
            $("#phone").addClass("error");
        }

        else if (!cardnumber("debit")) {
          alert("Not a valid  credit card number!");
          $("#debit").val("XXXXXXXXXXXXXXXX");
          $("#debit").addClass("error");
        }

        else if (name=="" || !/^[A-Za-z]+$/.test(name) ) {
          alert("Not a valid  name!");
          $("#name").val("");
          $("#name").addClass("error");
        }




        else {
            $("#phone").removeClass("error");
            $("#debit").removeClass("error");
        }

    });


    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateTimeInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date(),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});
