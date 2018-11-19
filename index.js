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
  }, 33);

  const pizza = setInterval(() => {
    $('body').css('backgroundColor', randomColor(colors));
  }, 50);

  let texterval, colorval;

  $('body').on('mousedown', function() {
    clearInterval(colorval);
    clearInterval(pizza);
    $('body').css('backgroundColor', 'white');
    texterval = setInterval(() => {
      $('.top').css('color', randomColor(colors));
      $('.top').css('textShadow', `1px 10px 20px ${randomColor(colors)},
      -8px -8px 30px ${randomColor(colors)},
      10px 1px 20px ${randomColor(colors)},
      0px 0px 50px ${randomColor(colors)}`)
      $('.bottom').css('color', randomColor(colors));
      $('.bottom').css('textShadow', `1px 10px 20px ${randomColor(colors)},
      -8px -8px 30px ${randomColor(colors)},
      10px 1px 20px ${randomColor(colors)},
      0px 0px 50px ${randomColor(colors)}`)
    }, 50);
  });

  $('body').on('mouseup', function() {
    clearInterval(texterval);
    $('.top').css('color', 'white');
    $('.bottom').css('color', 'white');
    colorval = setInterval(() => {
      $('body').css('backgroundColor', randomColor(colors));
      $('.top').css('textShadow', `1px 10px 20px white,
      -8px -8px 30px white,
      10px 1px 20px white,
      0px 0px 50px white`);
      $('.bottom').css('textShadow', `1px 10px 20px white,
      -8px -8px 30px white,
      10px 1px 20px white,
      0px 0px 50px white`);
    }, 50);
  });

  setInterval(function() {
    $('div#upper-left').html(time.getHours() % 12 || 12);
    $('div#upper-right').html(time.getMinutes());
    $('div#lower-right').html(time.getSeconds());
  }, 1000);


  let i = 0
  setInterval(function() {
    if (i % 10 == 0) {
      $('div#center').append('<span class="dot">\n.</span>');
      i++;
    } else if (i < 59) {
      $('div#center').append('<span class="dot">.</span>');
      i++;
    } else {
      i = 0;
      $('div#center').html('');
    }
  }, 1000);
});
