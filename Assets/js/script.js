//when the user adds to the callender and clicks save it saves to localStorage
$(document).ready(function () {
  $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
    console.log("click");
  });
  //gets current time in 24hours
  var currentHour = dayjs().$H;
//takes the current time and compares it to the block time on schedule
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(blockHour);
    console.log(currentHour);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    }
    else if (blockHour > currentHour) {
      $(this).addClass("future");
    }
    else {
      $(this).addClass("present");
    }
  });
  
  //this grabs the informations from localStorage
  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var savedUserInput = localStorage.getItem(timeBlockId);
    $(this).find(".description").val(savedUserInput);
  });
  
  //displays the date at the top of the page
  const currentDate = new Date();
  
  //this gets the date and diplays it in a specific formate
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  // Set the current date in the header
  document.getElementById('currentDay').textContent = formattedDate;

});
