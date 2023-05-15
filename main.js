/* SHOW MENU */
const navMenu = $("#navMenu"),
  navToggle = $("#navToggle"),
  navClose = $("#navClose");

/* MENU SHOW */
if (navToggle) {
  navToggle.click(function () {
    $("#navMenu").addClass("show-menu");
  });
}

/* MENU HIDDEN */
if (navClose) {
  navClose.click(function () {
    $("#navMenu").removeClass("show-menu");
  });
}

/* Remove Menu Moblie */
$(".nav-link").click(function () {
  $(".nav-link").each(function () {
    $("#navMenu").removeClass("show-menu");
  });
});
