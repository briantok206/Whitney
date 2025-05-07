// Set your target date here
const targetDate = new Date("2025-05-08T00:00:00").getTime();
coutdown_timer()
const countdown = setInterval(coutdown_timer,1000) 
function coutdown_timer(){
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance <= 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Countdown finished!";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML =
    `${hours} HOURS ${minutes} MINUTES ${seconds} SECONDS`;
};