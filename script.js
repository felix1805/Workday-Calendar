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


//$(".row").on("click", ".saveBtn", function () {
 // console.log('WE GOT CLICKED!!!')
  //var result = $(this).children().find(".descripion").val();

 // console.log('this shoudl b the text', result)
 // localStorage.setItem($(this).parent().data("hour"), result);
//});

var textArea = document.querySelector(".description")
var saveBtn = document.querySelector(".saveBtn")


var inputValue = textArea.value

//function textArea() {
// var textContent = {
//    textArea: textArea.value
// };
// localStorage.setItem("textContent", JSON.stringify(textContent));
//}
// saveBtn.addEventListener('click', function(event) {
//   event.preventDefault()
//   localStorage.setItem('hello', 'JSON.stringify(textArea.value');
// })

// textArea.value = JSON.parse(localStorage.getItem("inputValue"))
containerEl[0].addEventListener("click", function (event) {
  if (event.target.matches(".saveBtn")) {
    localStorage.setItem(
      event.target.parentNode.dataset.hour,
      JSON.stringify(
        event.target.parentNode.querySelector(".description").value
      )
    );
  }
});