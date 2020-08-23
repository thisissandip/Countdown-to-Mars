let targetdate = new Date("18 February,2035 12:02:22").getTime();

let progressbar = document.querySelector('.progress');

let showpercentage = document.querySelector('.show-percentage');

let update = setInterval(function(){

let now  = new Date().getTime();

let diff = targetdate - now;

let days = Math.floor( diff / (1000*60*60*24));
let hours = Math.floor( (diff / (1000*60*60))%24);
let minutes = Math.floor( (diff / (1000*60))%60);
let seconds = Math.floor( (diff / (1000))%60);

let show_seconds = document.querySelector('.seconds');
show_seconds.innerHTML = seconds;
let show_min = document.querySelector('.minutes');
show_min.innerHTML = minutes + " : ";
let show_hrs = document.querySelector('.hours');
show_hrs.innerHTML = hours + " : "  ;
let show_days = document.querySelector('.days');
show_days.innerHTML = days + " : " ; 

let progress_perc = ((now/targetdate)*100); 

progressbar.style.width = `${progress_perc}%`;

let the_per = Math.floor(progress_perc);

showpercentage.innerHTML = the_per + " %";

},1000);

