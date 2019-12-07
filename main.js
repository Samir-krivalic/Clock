var sec = document.getElementById("sec");
var min = document.getElementById("min");
var hour = document.getElementById("hour");

setInterval(updateClock, 1000);

function updateClock(){
  let date = new Date();
  let seconds = date.getSeconds() / 60;
  let minutes = (date.getMinutes() + seconds) / 60;
  let hours = (date.getHours() + minutes) / 12;

  sec.style.transform = "rotate(" + (seconds * 360) + "deg)";
  min.style.transform = "rotate(" + (minutes * 360) + "deg)";
  hour.style.transform = "rotate(" + (hours * 360) + "deg)";
}

updateClock();
