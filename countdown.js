// Set the deadline for February 28, 2024, 12:00 pm GMT+3
const deadline = new Date("2024-02-28T12:00:00+03:00").getTime();

// Update the countdown every second
const countdown = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time in milliseconds
    const distance = deadline - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the HTML
    document.getElementById("countdown-days").innerText = days;
    document.getElementById("countdown-hours").innerText = hours;
    document.getElementById("countdown-minutes").innerText = minutes;
    document.getElementById("countdown-seconds").innerText = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-container").innerHTML = "The deadline has passed.";
    }
}, 1000);
