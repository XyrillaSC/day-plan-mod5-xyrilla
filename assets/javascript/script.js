$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});
var today = dayjs()
$('#currentDay').text(`Today is ${today.format('dddd, MMMM D YYYY')}`)


let hours = [$('#hour-9'), $('#hour-10'), $('#hour-11'), $('#hour-12'), $('#hour-13'), $('#hour-14'), $('#hour-15'), $('#hour-16'), $('#hour-17')]


// console.log(hours)

hours.forEach(function (hour) {
  console.log(hour)
  console.log(dayjs().hour())
  if (hour.data('hour') < dayjs().hour()) {
    hour.removeClass('present').addClass('past')
  }
  else if (hour.data('hour') === dayjs().hour()) {
    hour.removeClass('future').addClass('present')
  }
  else if (hour.data('hour') > dayjs().hour()) {
    hour.removeClass('past').addClass('future')
  }
})
