$(document).ready(function() {
  const colors = ['#45FF92', '#FFCC35', '#FF87C5', '#45AEFF', '#FFFF32', '#FF4F38', '#4FFFF3', '#4F4FFF', '#FF87FB']
  let time = new Date();
  const randomColor = function(colors) {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  $('div#upper-left').html(time.getHours() % 12 || 12);
  // $('div#upper-left').css('color', randomColor(colors));
  $('div#upper-right').html(time.getMinutes());
  // $('div#upper-right').css('color', randomColor(colors));
  $('div#lower-right').html(time.getSeconds());
  // $('div#lower-right').css('color', randomColor(colors));
  $('div#lower-left').html(time.getMilliseconds());
  // $('div#lower-left').css('color', randomColor(colors));

  setInterval(() => {
    time = new Date;

    $('div#lower-left').html(time.getMilliseconds());
    $('body').css('backgroundColor', randomColor(colors));
  }, 33);

  setInterval(function() {
    $('div#upper-left').html(time.getHours() % 12 || 12);
    $('div#upper-right').html(time.getMinutes());
    $('div#lower-right').html(time.getSeconds());
  }, 1000);

  let i = 0
  setInterval(function() {
    if (i % 10 == 0) {
      $('div#center').append('<span class="dot boop">\n.</span>');
      i++;
    } else if (i < 59) {
      $('div#center').append('<span class="dot boop">.</span>');
      i++;
    } else {
      i = 0;
      $('div#center').html('');
    }
  }, 1000);
});
