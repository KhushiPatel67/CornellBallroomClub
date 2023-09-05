//
// References used:
// https://api.jquery.com/append/
// https://stackoverflow.com/questions/31556085/change-text-daily-based-on-day-and-time-of-day
// https://stackoverflow.com/questions/48239/getting-the-id-of-the-element-that-fired-an-event
// https://stackoverflow.com/questions/3774699/javascript-jquery-how-do-i-obtain-name-of-the-class-of-clicked-element
// https://stackoverflow.com/questions/5868850/creating-list-of-objects-in-javascript
//

//list of calendar events
//months start at 0 rather than the usual 1
var eventList = {
  "2021,10,30" : ["Event" , "Event 8:00pm Williard Straight Hall"],
  "2021,10,13" : [" Special Event" , "Event 8:00pm Williard Straight Hall"],
  "2021,10,4" : ["Workshop" , "Workshop 4:00pm Williard Straight Hall"],
  "2021,10,11" : ["Workshop" , "Workshop 4:00pm Williard Straight Hall"],
  "2021,08,13" : ["Rachel's Birthday" , "Love ya girlie <3"],
  "2021,10,24" : ["Start of Thanksgiving Break" , "Have a good break!"],
  "2021,10,18" : ["Workshop" , "Workshop 4:00pm Williard Straight Hall"],
  "2021,11,2" : ["Workshop" , "Workshop 4:00pm Williard Straight Hall"],
  "2021,11,9" : ["Workshop" , "Workshop 4:00pm Williard Straight Hall"],
  "2021,11,19" : ["Start of Winter Break" , "Have a good break!"],
  "2022,00,03" : ["Winter Session Begins" , "Good luck!"],
  "2022,00,21" : ["End of Winter Session" , "Good luck!"],
  "2022,00,17" : ["MLK Jr Day" , "National Holiday"],
  "2022,00,24" : ["Start of Spring Term" , "Good luck!"],
}

const date = new Date();

$(document).ready(function(){
  setCal();
});

$("#back-button").click(function() {
  date.setMonth(date.getMonth()-1);
  setCal();
});

$("#forward-button").click(function() {
  date.setMonth(date.getMonth()+1);
  setCal();
});

var boxCount = [];
var hid = {};

function setCal (){

  //set the calendar heading
  const month = date.getMonth();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const setMonth = months[month];
  document.getElementById("setMonths").innerHTML = ('<h1>'+setMonth+ ' '+ date.getFullYear() +'</h1>');

  //start calendar at correct day of the week
  //finds day of the week for the 1st of month
  date.setDate(1);
  var day2= date.getDay();

  let dayList = [];
  var dropList = [];
  let idList = [];

  //adds empty days to start of list to fill week
  if (day2 < 7){
    for (var x = 1; x <= day2; x++){
      dayList += ('<div class="day2"></div>');
    }
  }
  boxCount = dayList;

  //set the days in the month
  let monthDays = [];
  var numDays =  new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
  const realDate = new Date();

  for (var x = 1; x <= numDays; x++){
    date.setDate(x);

    //add events from eventList
    for (var k = 0; k < (Object.keys(eventList).length); k++){
      var eventYear = ((Object.keys(eventList)[k]).substring(0,4));
      var eventMonth = ((Object.keys(eventList)[k]).substring(5,7));
      var eventDay = ((Object.keys(eventList)[k]).substring(8,10));
      var eventName = ((eventList[(Object.keys(eventList)[k])])[0]);
      var eventID = eventName + "" + x;
      if ((date.getFullYear() == eventYear) && (date.getMonth() == eventMonth) && (x == eventDay)){
        dayList += ('<div class="day3 meet ' + x + '" id="' + eventID + '">' + x + '<div class="newline meet ' + x + '" id="' + eventID + '">' + eventName + '</div>' + '</div>');
        dropList += '<div class="dropdown drop hidden" id="' + eventID + 'd">' + ((eventList[(Object.keys(eventList)[k])])[1]) + '</div>';
        x++;
        idList.push(eventID);
        hid[eventID] = 1;
      }
    }

    //adds days without special cases to the month
    if (x <=numDays){
      dayList += ('<div class="day3 ' + x + '">' + x + '</div>');
    }
  }

  let text = dayList.toString();
  var bigNum = (text.match(/"day/g) || []).length;

  //adds the current day
  if ((date.getFullYear() == realDate.getFullYear()) && (date.getMonth() == realDate.getMonth())) {
    var currDay = realDate.getDate();
    var ind = dayList.indexOf((currDay + '"'));
    var dayCopy = "";
    for (var n = 0; n < dayList.length; n++){
      dayCopy += dayList.charAt(n);

      if (currDay.toString().length < 2){
        if (n == ind){
          dayCopy += " today";
        }
      }
      else{
        if (n == ind+1){
          dayCopy += " today";
        }
      }
    }
    dayList = dayCopy;
  }
  for (var i = 1; i < 7; i++){
    //adds next month's days
    if ((bigNum % 7) != 0) {
      dayList += ('<div class="day4">' + i + '</div>');
      bigNum ++;
    }
  }

  let text2 = dayList.toString();

  document.getElementById("all-days").innerHTML = (text2);
  date.setDate(15);

  //adds event dropdowns
  document.getElementById("dropdown").innerHTML = dropList;
  for (var k = 0; k<idList.length; k++){
    document.getElementById(idList[k]).addEventListener("click", eventDrop, true);
  }
}

function eventDrop(){
  //dropdown menu function
  var dropId = document.getElementById(event.target.id + 'd');
  rem = (parseInt(boxCount.length/24) + parseInt($(event.target).attr('class').split(' ')[2]));
  count = Math.floor((rem-1)/7);
  rem = rem % 7;

  if (((parseInt(hid[event.target.id])) % 2) == 0){
    $(dropId).removeClass("zero");
    $(dropId).removeClass("one");
    $(dropId).removeClass("two");
    $(dropId).removeClass("three");
    $(dropId).removeClass("four");
    $(dropId).removeClass("five");
    $(dropId).removeClass("d1");
    $(dropId).removeClass("d2");
    $(dropId).removeClass("d3");
    $(dropId).removeClass("d4");
    $(dropId).removeClass("d5");
    $(dropId).removeClass("d6");
    $(dropId).removeClass("d7");

    $(dropId).addClass("hidden");
    hid[event.target.id] = "1";
  }else{
    if (count == 0){$(dropId).addClass("zero")}
    if (count == 1){$(dropId).addClass("one")}
    if (count == 2){$(dropId).addClass("two")}
    if (count == 3){$(dropId).addClass("three")}
    if (count == 4){$(dropId).addClass("four")}
    if (count == 5){$(dropId).addClass("five")}

    if (rem == 1){$(dropId).addClass("d1")}
    if (rem == 2){$(dropId).addClass("d2")}
    if (rem == 3){$(dropId).addClass("d3")}
    if (rem == 4){$(dropId).addClass("d4")}
    if (rem == 5){$(dropId).addClass("d5")}
    if (rem == 6){$(dropId).addClass("d6")}
    if (rem == 0){$(dropId).addClass("d7")}

    $(dropId).removeClass("hidden");
    hid[event.target.id] = "2";
  }
}

//remove dropdown when somewhere else is clicked
$(document).click( function(dropped) {
  if ((dropped.target.id).length >= 1){
    if (!($('#' + dropped.target.id).attr('class')).includes('meet')){
      $(".drop").removeClass("zero");
      $(".drop").removeClass("one");
      $(".drop").removeClass("two");
      $(".drop").removeClass("three");
      $(".drop").removeClass("four");
      $(".drop").removeClass("five");
      $(".drop").removeClass("d1");
      $(".drop").removeClass("d2");
      $(".drop").removeClass("d3");
      $(".drop").removeClass("d4");
      $(".drop").removeClass("d5");
      $(".drop").removeClass("d6");
      $(".drop").removeClass("d7");
      $(".drop").addClass("hidden");

      Object.keys(hid).forEach(v => hid[v] = 1);

    }
  }
  else{
    $(".drop").removeClass("zero");
    $(".drop").removeClass("one");
    $(".drop").removeClass("two");
    $(".drop").removeClass("three");
    $(".drop").removeClass("four");
    $(".drop").removeClass("five");
    $(".drop").removeClass("d1");
    $(".drop").removeClass("d2");
    $(".drop").removeClass("d3");
    $(".drop").removeClass("d4");
    $(".drop").removeClass("d5");
    $(".drop").removeClass("d6");
    $(".drop").removeClass("d7");
    $(".drop").addClass("hidden");

    Object.keys(hid).forEach(v => hid[v] = 1);
  }
})
