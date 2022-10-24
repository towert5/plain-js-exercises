// Update the getDayTimeDifference() function so it will return the difference between 2 dates broken down in days, hours, minutes and seconds
/*
======================================================
Example output of current date is 2022-10-24 14:49:36
======================================================
Days Elapsed: 145
Hours Elapsed: 6
Minutes Elapsed: 49
Seconds Elapsed: 36
*/

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

