$(".fa-times").click(function (e) {
  e.preventDefault();
  $(".hamburger_icon").toggleClass("fa-bars");
  $("nav ul").toggle();
  $(".title_container").toggleClass(
    "title_container_after_the_navBar_is_collapsed"
  );
});

// click to scroll top (for footer section)
$(".move-up span").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
