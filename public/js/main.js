$(function () {
  $(".slide .learn-more").on('click', function () {
    alert("LEARN MORE")
  })

  $("#controls li").on('click', function (e) {
    var slideNo = $(this).data("slide")
    $("#controls li").removeClass("active")
    $(this).addClass("active")
    $(".slide").animate({ opacity : 0, "z-index" : 1 })
    $("#slide-" + slideNo).animate({ opacity : 1, "z-index" : 2 })
  })
})
