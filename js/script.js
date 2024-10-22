var countDownDate = new Date("OCT 22, 2024 13:01:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days-num").innerHTML = days;
  document.getElementById("hours-num").innerHTML = hours;
  document.getElementById("mins-num").innerHTML = minutes;
  document.getElementById("secs-num").innerHTML = seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days-num").innerHTML = "0";
    document.getElementById("hours-num").innerHTML = "0";
    document.getElementById("mins-num").innerHTML = "0";
    document.getElementById("secs-num").innerHTML = "0";
  }
}, 1000);