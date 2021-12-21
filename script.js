var issession = true;
var running = false;
var count;
var counter;
var sound = document.getElementById("beep");
function break_minus() {
  if (running != true) {
    let x = document.getElementById("break-length").innerHTML;
    if (Number(x) > 1) {
      document.getElementById("break-length").innerHTML = Number(x) - 1;
    }
    if (issession === false) {
      let len = document.getElementById("break-length").innerHTML;
      if (len < 10) {
        document.getElementById("min").innerHTML = "0" + len;
      } else {
        document.getElementById("min").innerHTML = len;
      }
    }
  }
}

function break_plus() {
  if (running != true) {
    let x = document.getElementById("break-length").innerHTML;
    if (Number(x) < 60) {
      document.getElementById("break-length").innerHTML = Number(x) + 1;
    }
    if (issession === false) {
      if (issession === false) {
        let len = document.getElementById("break-length").innerHTML;
        if (len < 10) {
          document.getElementById("min").innerHTML = "0" + len;
        } else {
          document.getElementById("min").innerHTML = len;
        }
      }
    }
  }
}

function session_minus() {
  if (running != true) {
    let x = document.getElementById("session-length").innerHTML;
    if (Number(x) > 1) {
      document.getElementById("session-length").innerHTML = Number(x) - 1;
    }
    if (issession === true) {
      let len = document.getElementById("session-length").innerHTML;
      if (len < 10) {
        document.getElementById("min").innerHTML = "0" + len;
      } else {
        document.getElementById("min").innerHTML = len;
      }
    }
  }
}

function session_plus() {
  if (running != true) {
    let x = document.getElementById("session-length").innerHTML;
    if (Number(x) < 60) {
      document.getElementById("session-length").innerHTML = Number(x) + 1;
    }
    if (issession === true) {
      let len = document.getElementById("session-length").innerHTML;
      if (len < 10) {
        document.getElementById("min").innerHTML = "0" + len;
      } else {
        document.getElementById("min").innerHTML = len;
      }
    }
  }
}

function reset() {
  issession = true;
  running = false;
  clearInterval(counter);
  document.getElementById("session-length").innerHTML = 25;
  document.getElementById("break-length").innerHTML = 5;
  document.getElementById("timer-label").innerHTML = "Session";
  document.getElementById("min").innerHTML = "25";
  document.getElementById("sec").innerHTML = "00";
  $("#time-left, #timer-label").removeClass("red");
  sound.pause();
  sound.currentTime = 0;
}

$(document).ready(function () {
  $("#start_stop").click(function () {
    if (running === true) {
      running = false;
    } else {
      running = true;
    }
    if (running === true) {
      var mins = Number(document.getElementById("min").innerHTML);
      var seconds = Number(document.getElementById("sec").innerHTML);
      counter = setInterval(timer, 1000);
      function timer() {
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          mins--;
        }
        if (mins < 0) {
          sound.play();
          if (issession === true) {
            issession = false;
          } else {
            issession = true;
          }
          if (issession === false) {
            document.getElementById("timer-label").innerHTML = "Break";
            document.getElementById("min").innerHTML = document.getElementById(
              "break-length"
            ).innerHTML;
            document.getElementById("sec").innerHTML = "00";
            mins = Number(document.getElementById("min").innerHTML);
            seconds = Number(document.getElementById("sec").innerHTML);
          }
          if (issession === true) {
            document.getElementById("timer-label").innerHTML = "Session";
            document.getElementById("min").innerHTML = document.getElementById(
              "session-length"
            ).innerHTML;
            document.getElementById("sec").innerHTML = "00";
            mins = Number(document.getElementById("min").innerHTML);
            seconds = Number(document.getElementById("sec").innerHTML);
          }
        }

        if (mins < 10) {
          document.getElementById("min").innerHTML = "0" + mins;
        } else {
          document.getElementById("min").innerHTML = mins;
        }
        if (seconds < 10) {
          document.getElementById("sec").innerHTML = "0" + seconds;
        } else {
          document.getElementById("sec").innerHTML = seconds;
        }
        $("#time-left, #timer-label").removeClass("red");
        if (mins < 1) {
          $("#time-left, #timer-label").addClass("red");
        }
      }
    }

    if (running === false) {
      clearInterval(counter);
      return;
    }
  });
});
