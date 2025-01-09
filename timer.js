document.querySelector("button").addEventListener("click", function() {
    let inputSec = document.getElementById("sec").value;
    let sec = parseInt(inputSec);

    if (sec > 0) {
        let countdown = setInterval(function() {
            if (sec === 0) {
                clearInterval(countdown);
                document.getElementById("p").innerText = "Time's up!";
            } else {
                let minutes = Math.floor(sec / 60);
                let seconds = sec % 60;
                document.getElementById("p").innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds} Left`;
                sec--;
            }
        }, 1000);
    }
});
