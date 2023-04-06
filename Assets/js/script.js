
$(document).ready(function () {
  $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
    console.log("click");
  });
  var currentHour = dayjs().format('HH A');
  console.log(currentHour);
  $(".time-block").each(function() {
    var blockHour = $(this).attr("id").split("-");
    console.log(blockHour);
    if (blockHour <= currentHour) {
      $(this).addClass("past").removeClass("present future");
    }
    else if (blockHour >= currentHour) {
      $(this).addClass("future").removeClass("past present");
    }
    else {
      $(this).addClass("present").removeClass("past future");
    }
  });
  
  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var savedUserInput = localStorage.getItem(timeBlockId);
    $(this).find(".description").val(savedUserInput);
  });
  
  const currentDate = new Date();

  // Format the date as "Month Day, Year"
  const options = { year: 'numeric', month: 'long', day: 'numeric'};
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  // Set the current date in the header
  document.getElementById('currentDay').textContent = formattedDate;

});
