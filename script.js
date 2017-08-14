$( document ).ready(function() {
  var timer = new Timer();
  timer.start({precision: 'seconds'});
  timer.addEventListener('secondsUpdated', function (e) {
      $('#gettingValuesExample .days').html(timer.getTimeValues().days);
      $('#gettingValuesExample .hours').html(timer.getTimeValues().hours);
      $('#gettingValuesExample .minutes').html(timer.getTimeValues().minutes);
      $('#gettingValuesExample .seconds').html(timer.getTimeValues().seconds);
  });   
});