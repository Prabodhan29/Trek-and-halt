$(".fa-bars").click(function (e) {
  e.preventDefault();
  $(".hamburger_icon").toggleClass("fa-times");
  $(".moreOptions").toggle();
});
