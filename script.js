function gettime() {
    // Update the HTML element
    let hrs = document.getElementById('hrs');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let mis = document.getElementById('mis');

    // GET current time 
    let currentTime = new Date();
    let mils = currentTime.getMilliseconds() /10 | 0; // get two digitd in milliseconds
    
    // pass the data to html also add 0 infont if the value is <10
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    mis.innerHTML = (mils<10?"0":"") + mils;

    // update date section
    let day = document.getElementById('day');
    let dat = document.getElementById('date');
    let mon = document.getElementById('month');
    let yea = document.getElementById('year');

    // use list to store names of the days and call the name based on day value from 0-6
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day.innerHTML = weekday[currentTime.getDay()] + ",";

    // pass date number and add 0 in front if the value is less than 10
    dat.innerHTML = (currentTime.getDate()<10?"0":"") + currentTime.getDate();

    // use list to store names of the months and call the name based on day value from 0-11
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November","December"];
    mon.innerHTML = monthNames[currentTime.getMonth()];

    //set year
    yea.innerHTML = currentTime.getFullYear();

  }


const interval = setInterval(gettime, 10); // calling the fucntion
