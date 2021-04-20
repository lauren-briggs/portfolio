const contactEl = $('#contact');
const infoEl = $('.info');

const echoLink = $('#echobeats-link');
const weatherLink = $('#weather-link');
const workdayLink = $('#workday-link');

const echoImg = $('#echobeats-img');
const weatherImg = $('#weather-img');
const workdayImg = $('#workday-img');


//contact pop up
contactEl.mouseenter(function () {
  infoEl.addClass('showme');
});

infoEl.mouseleave(function () {
  infoEl.removeClass('showme');
});

//background img on hover echo
echoLink.mouseenter(function () {
  echoImg.css('display', 'block');
})

echoLink.mouseleave(function () {
  echoImg.css('display', 'none');
})
//background img on hover weather
weatherLink.mouseenter(function () {
  weatherImg.css('display', 'block');
})

weatherLink.mouseleave(function () {
  weatherImg.css('display', 'none');
})

//background img on hover day planner
workdayLink.mouseenter(function () {
  workdayImg.css('display', 'block');
})

workdayLink.mouseleave(function () {
  workdayImg.css('display', 'none');
})

console.log(echoLink);