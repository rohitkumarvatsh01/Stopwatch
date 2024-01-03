let timer;
let minutes = 0;
let seconds = 0;

function startStopwatch() {
  if (!timer) {
    timer = setInterval(updateStopwatch, 1000);
  }
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
  const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;

  const stopwatchDisplay = document.getElementById('stopwatch');
  stopwatchDisplay.textContent = `${displayMinutes}:${displaySeconds}`;

  if (minutes === 1) {
    clearInterval(timer);
    timer = null;
  }
}

function resetStopwatch() {
  clearInterval(timer);
  timer = null;
  minutes = 0;
  seconds = 0;
  const stopwatchDisplay = document.getElementById('stopwatch');
  stopwatchDisplay.textContent = '00:00';
}
