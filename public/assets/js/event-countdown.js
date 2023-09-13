// Countdown
 const timeInDay = 2;
 const currentTime = Date.parse(new Date());
 const deadline = new Date(currentTime + timeInDay * 24 * 60 * 60 * 1000);
 // for a timer count down in minute
 //const deadline = 'December 31 2030 23:59:59 GMT+0200';
 // for count down untill a date

 function getTimeRemaining(endtime) {
     const total = Date.parse(endtime) - Date.parse(new Date());
     const seconds = Math.floor((total / 1000) % 60);
     const minutes = Math.floor((total / 1000 / 60) % 60);
     const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

     return {
         total,
         hours,
         minutes,
         seconds
     };
 }

 function initializeClock(clockClass, endtime) {
     const clock = document.querySelector(clockClass);
     const hoursSpan = clock.querySelector('.hours');
     const minutesSpan = clock.querySelector('.minutes');
     const secondsSpan = clock.querySelector('.seconds');

     function updateClock() {
         const t = getTimeRemaining(endtime);
         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
         if (t.total <= 0) {
             clearInterval(timeinterval);
         }
     }
     updateClock(); // run function once at first to avoid delay
     var timeinterval = setInterval(updateClock, 1000);
 }


 initializeClock('.event-countdown', deadline);

 // End Countdown