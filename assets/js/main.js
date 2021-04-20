const contactEl = $('#contact');
const infoEl = $('.info');

const echoLink = $('#echobeats-link');
const weatherLink = $('#weather-link');
const workdayLink = $('#workday-link');
const codequizLink = $('#codequiz-link');

const echoImg = $('#echobeats-img');
const weatherImg = $('#weather-img');
const workdayImg = $('#workday-img');
const codequizImg = $('#codequiz-img');

const echoInfo = $('.echo-info');
const weatherInfo = $('.weather-info');
const workdayInfo = $('.workday-info');
const codequizInfo = $('.codequiz-info');

const echoClose = $('.echo-close');
const weatherClose = $('.weather-close');
const workdayClose = $('.workday-close');
const codequizClose = $('.codequiz-close');


console.log(echoClose);

//contact pop up
contactEl.mouseenter(function () {
  infoEl.addClass('showme');
});

infoEl.mouseleave(function () {
  infoEl.removeClass('showme');
});

//ECHO background img and info on hover
echoLink.mouseenter(function () {
  echoImg.css('display', 'block');
  echoInfo.css('display', 'block');
})
echoClose.click(function () {
  echoInfo.css('display', 'none');
  echoImg.css('display', 'none');
})

//WEATHER background img on hover
weatherLink.mouseenter(function () {
  weatherImg.css('display', 'block');
  weatherInfo.css('display', 'block');
})

weatherClose.click(function () {
  weatherInfo.css('display', 'none');
  weatherImg.css('display', 'none');
})

//WORK DAY background img on hover
workdayLink.mouseenter(function () {
  workdayImg.css('display', 'block');
  workdayInfo.css('display', 'block');
})

workdayClose.click(function () {
  workdayInfo.css('display', 'none');
  workdayImg.css('display', 'none');
})

//CODE QUIZ background img on hover
codequizLink.mouseenter(function () {
  codequizImg.css('display', 'block');
  codequizInfo.css('display', 'block');
})

codequizClose.click(function () {
  codequizInfo.css('display', 'none');
  codequizImg.css('display', 'none');
})