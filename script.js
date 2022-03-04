// code for current time and date to display at top of page.
var curr = moment().add(1, "hours").hour();
moment().format("MMM Do YY");
var currentDay = document.getElementById("currentDay");
var currentTime = moment().format("LLL");
currentDay.textContent += currentTime;

var containerEl = document.getElementsByClassName('container')

$("#currentDay").text(moment().format("LLL"));
$(".row").each(function () {
  var hour = $(this).data("hour");
  var message = localStorage.getItem(hour);
  $(this).find(".description").text(message);
  $(this).addClass(hour > curr ? "future" : hour < curr ? "past" : "present");
});

// function and variables for local storage to obtain and maintain values after refresh.
var textArea = document.querySelector(".description")
var saveBtn = document.querySelector(".saveBtn")
var inputValue = textArea.value
containerEl[0].addEventListener("click", function (event) {
  if (event.target.matches(".saveBtn")) {
    localStorage.setItem(
      event.target.parentNode.dataset.hour,
      JSON.stringify(
        event.target.parentNode.querySelector('.description').value
      )
    );
  }
});