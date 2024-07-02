
const dayText = document.getElementById("currentDay");
const timeText = document.getElementById("currentTime");

//Set the date

function updateTime(){
const currentDate = new Date();
const day = currentDate.getUTCDay();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

dayText.textContent = daysOfWeek[day];

//Set the time
const currentTime = currentDate.getUTCHours() + ":" + currentDate.getUTCMinutes() + ":" + currentDate.getUTCSeconds();
timeText.textContent = currentTime;
}

setInterval(updateTime, 1000);
updateTime();