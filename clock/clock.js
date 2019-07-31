setInterval(time => {
  var time = new Date();

  var currentTime =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  console.log(currentTime);
  document.getElementById("time").innerHTML = currentTime;
}, 100);
