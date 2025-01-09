let sec = 0;
let minutes = 0;
let running = false;
let interval;

function start() {
  if (running) return;
  running = true;
  interval = setInterval(function() {
    sec++;
    if (sec === 60) {
      sec = 0;
      minutes++;
    }
    let displaySec = sec < 10 ? "0" + sec : sec;
    document.getElementById("p").innerText = `${minutes}:${displaySec}`;
  }, 1000);
}

function stop(){
    clearInterval(interval);
    running = false
}


function reset() {
  clearInterval(interval);
  sec = 0;
  minutes = 0;
  running = false;
  document.getElementById("p").innerText = "0:00";
}
