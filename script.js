var curr = moment().add(1, "hours").hour();
moment().format("MMM Do YY");
var currentDay = document.getElementById("currentDay");
var currentTime = moment().format("LLL");
currentDay.textContent += currentTime;
$("#currentDay").text(moment().format("LLL"));
$(".row").each(function () {
  var hour = $(this).data("hour");
  var message = localStorage.getItem(hour);
  $(this.find(".description").text(message));
  $this.addClass(hour > curr ? "future" : hour < curr ? "past" : "present");
});
$(".row").on("click", ".saveBtn", function () {
  var result = $(this).parent().find(".descripion").val();
  localStorage.setItem($(this).parent().data("hour"), result);
});

var textArea = document.querySelector(".description")
var saveBtn = document.querySelector(".saveBtn")


var inputValue = textArea.value

//function textArea() {
  // var textContent = {
    //    textArea: textArea.value
    // };
    // localStorage.setItem("textContent", JSON.stringify(textContent));
    //}
    saveBtn.addEventListener('click', function(event) {
      event.preventDefault()
      localStorage.setItem('hello', 'JSON.stringify(textArea.value');
    })
    
    textArea.value = JSON.parse(localStorage.getItem("inputValue"))