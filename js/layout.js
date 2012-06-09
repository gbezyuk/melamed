function ord(c)
{
  return c.charCodeAt(0);
}
   
function chr(o)
{
  return String.fromCharCode(o);
} 

$(function () {
  setInterval(function clear_done() {
    $('.input_queue li.done:visible').hide('slow');
  }, 100);
  $(document).keypress(function (event) {
    if ( event.which == 13 ) {
      event.preventDefault();
    }
    var letter_pressed = chr(event.which);
    var letter_avaited = $('.input_queue li.active').text();
    if (letter_avaited == letter_pressed) {
      $('.input_queue li.active').removeClass('active').addClass('done').next().addClass('active');
      $('.keyboard li').removeClass('active').filter(':contains(' + $('.input_queue li.active').text() + ')').addClass('active');
    }
  });
});