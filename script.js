// work hours var
var hours =[9,10,11,12,1,2,3,4,5]
// handle for html elemt for date
var date = $("#currentDay");
// handle for row container
var rows = $(".container");
// create row div

// set todays date at top of page
var currentDate = moment().format('dddd, MMMM Do YYYY');
date.append(currentDate);
// for loop to set hour rows
for(var i =0; i<hours.length;i++){
// create row for line info
var rowEl = $("<div>");
rowEl.addClass("row")
rows.append(rowEl)
// create hour block
var hour = $("<div>");
hour.addClass("col-md-2 hour");
if(hours >12){
hour.text(hours[i]+"Am");
rowEl.append(hour)
}else{
hour.text(hours[i]+"Pm");
rowEl.append(hour)
}
// create description block
var description = $("<div>");
description.addClass("col-md-8 present")
description.text("Hello")
rowEl.append(description);
// create savebutton
var saveBtn = $("<div>");
saveBtn.addClass("col-md-2 saveBtn")
rowEl.append(saveBtn)
}

