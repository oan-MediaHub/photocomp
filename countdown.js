const deadline = new Date("2024-02-28T11:59:00+03:00").getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();

    const distance = deadline - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-days").innerText = days;
    document.getElementById("countdown-hours").innerText = hours;
    document.getElementById("countdown-minutes").innerText = minutes;
    document.getElementById("countdown-seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-container").innerHTML = "The deadline has passed.";
    }
}, 1000);
