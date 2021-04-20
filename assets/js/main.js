//--contact pop up--/
$('#contact').click(function () {
  $('.info').addClass('showme');
});

$('.info').mouseleave(function () {
  $('.info').removeClass('showme');
});