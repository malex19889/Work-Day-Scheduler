$(document).ready(function () {
  
  //display current day 
  $("#currentDay").text(moment().format("MMMM Do YYYY,"));
  // work hours array
  // var hours =["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]
  var hours = [
    "9pm",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5am",
  ];
  var hours24 = [
     9,
     10,
     11,
     12,
     13,
     14,
     15,
     16,
     17
  ]

  
  // for loop to set hour rows
  for (var i = 0; i < hours.length; i++) {
    // create row for line info
    var rowEl = $("<div>");
    var hour = $("<div>");
    var description = $("<textarea>");
    var saveBtn = $("<button>");
    var saveIcon = $("<i>");
    // set attributes for each element
    rowEl.addClass("row time-block");
    rowEl.attr("id",hours24[i])
    hour.addClass("col-1 hour");
    hour.text(hours[i]);
    description.addClass("col-10 description");
    saveBtn.addClass("col-1 saveBtn");
    saveIcon.addClass("fas fa-save");
    // create row for day elements to nest in
    $(".container").append(rowEl);
    // create hour block
    rowEl.append(hour);
    // create description block
    rowEl.append(description);
    // create savebutton
    rowEl.append(saveBtn);
    // create icon in button
    saveBtn.append(saveIcon);
    save();
    cssTimeCheck();
    //load any saved data from LocalStorage 
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
   
  }

  function cssTimeCheck() {
    //get current hour
    var currentHour = moment().hour();
    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id"));
      console.log(blockHour, currentHour);

   
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  function save() {
    //Assign saveBtn click listener to save hour key and text 
    $(".saveBtn").on("click", function () {
      //get nearby values.
      console.log(this);
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      //save items in local storage.
      localStorage.setItem(time, text);
    });
  }
  
});
