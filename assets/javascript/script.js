$(function () {
  //listener for save event
  $('.saveBtn').on('click', function () {
    localStorage.setItem(`${$(this).parent('div').attr('id')}`, `${$(this).siblings('textarea').val()}`)
  })

  
  //defign the rows
  let hours = [$('#hour-9'), $('#hour-10'), $('#hour-11'), $('#hour-12'), $('#hour-13'), $('#hour-14'), $('#hour-15'), $('#hour-16'), $('#hour-17')]

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

  //get inputs from local storage and display in correct place
  for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(key, value);
    $(`#${key}`).children('.description').text(localStorage.getItem(`${key}`)) 
  }
  //dayjs integration
  var today = dayjs()
  $('#currentDay').text(`Today is ${today.format('dddd, MMMM D YYYY')}`)
});


