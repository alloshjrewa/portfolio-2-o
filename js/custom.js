/*global $, jQuery, alert, console*/

$(function () {
  "use strict";

  //Adjust Header height

  var myHeader = $(".header"),
    myslider = $(".slider");

  myHeader.height($(window).height());

  $(window).resize(function () {
    myHeader.height($(window).height());

    myslider.each(function () {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".slider div").height()) / 2
      );
    });
  });

  // Links Add Active Class

  $(".links li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  //Adjust Bxslider List Item Center

  myslider.each(function () {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".slider div").height()) / 2
    );
  });

  //Trigger The Bx Slider

  myslider.bxSlider({
    pager: false,
  });

  //Trigger Mixitup

  $("#container").mixItUp();

  //Adjust Shuffel Links

  $(".shuffel li").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  //Smooth Scroll To Div

  $(".links li a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1200
    );
  });

  // Our Auto Slider code

  (function autoSlider() {
    $(".slid .active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();

            autoSlider();
          });
      } else {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active");

            $(".slid div").eq(0).addClass("active").fadeIn();

            autoSlider();
          });
      }
    });
  })();
});
