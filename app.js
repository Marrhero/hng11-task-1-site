
const dayText = document.getElementById("currentDay");
const timeText = document.getElementById("currentTime");

//Set the date

function updateTime(){
    const currentDate = new Date();
    const day = currentDate.getUTCDay();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    dayText.textContent = daysOfWeek[day];

    var hours = currentDate.getUTCHours();
    var minutes = currentDate.getUTCMinutes();
    var seconds = currentDate.getUTCSeconds();

    if (hours < 10)
        hours = "0" + hours;

    if (minutes < 10)
        minutes = "0" + minutes;

    if (seconds < 10)
        seconds = "0" + seconds;

    //Set the time
    const currentTime = `${hours}:${minutes}:${seconds}`;
    timeText.textContent = currentTime;
}

setInterval(updateTime, 1000);
updateTime();