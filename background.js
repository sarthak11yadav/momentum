var today = new Date();
  hour = today.getHours();
  min = today.getMinutes();

  document.getElementById('hour').innerHTML = 
  `${hour}`;

  if(min < 10){
    document.getElementById('min').innerHTML = 
  `0${min}`;
  }
  else{
  document.getElementById('min').innerHTML = 
  `${min}`;
  }

setInterval(function(){
  var today = new Date();
  hour = today.getHours();
  min = today.getMinutes();

  document.getElementById('hour').innerHTML = 
  `${hour}`;

  if(min < 10){
    document.getElementById('min').innerHTML = 
  `0${min}`;
  }
  else{
  document.getElementById('min').innerHTML = 
  `${min}`;
  }

}, 1000);