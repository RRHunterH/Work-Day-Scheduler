$(function () {
    $(".saveBtn").on("click", function () {
      var timeBlockId = $(this).parent().attr("id");
      var userDescription = $(this).siblings(".description").val();
      localStorage.setItem(timeBlockId, userDescription);
    });
  
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var storedDescription = localStorage.getItem(timeBlockId);
      $(this).find(".description").val(storedDescription);
    });
  
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  });
  