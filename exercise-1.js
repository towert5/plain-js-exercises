// Update the getDayTimeDifference() function so it will return the difference between 2 dates in days, hours, minutes and seconds

function getDayTimeDifference(currentDate, refDate){
     let seconds = null;
     let minutes = null;
     let hours = null;
     let days = null;
     
     return {
         seconds: seconds,
         minutes: minutes,
         hours: hours,
         days: days,
     }
}

const dueDate = new Date("2022-06-01");
const timeDiff = getDayTimeDifference(new Date(), dueDate);
console.log(`Days Elapsed: ${timeDiff.days}`);
console.log(`Hours Elapsed: ${timeDiff.hours}`);
console.log(`Minutes Elapsed: ${timeDiff.minutes}`);
console.log(`Seconds Elapsed: ${timeDiff.seconds}`);

