// work hours array
var hours =["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]
// handle for html elemt for date
var date = $("#currentDay");
// set todays date at top of page
var currentDate = moment().format('dddd, MMMM Do YYYY');
date.append(currentDate);
// for loop to set hour rows
for(var i =0; i<hours.length;i++){
// create row for line info
var rowEl = $("<div>");
rowEl.addClass("row")
$(".container").append(rowEl)
// create hour block
var hour = $("<div>");
hour.addClass("col-1 hour");
hour.text(hours[i])
rowEl.append(hour)
// create description block
var description = $("<textarea>");
description.addClass("col-10 description");
description.text("Hello")
rowEl.append(description);
// create savebutton
var saveBtn = $("<button>");
saveBtn.addClass("col-1 saveBtn")
rowEl.append(saveBtn)
// create icon in button
var saveIcon = $("<i>");
saveIcon.addClass("fas fa-save")
saveBtn.append(saveIcon)
}

