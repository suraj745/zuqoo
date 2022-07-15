$("#product-button").click(() => {
  $(".product-drop-container").fadeToggle();
});

$("#company-button").click(() => {
  $(".company-drop-container").fadeToggle();
});

$("#resources-button").click(() => {
  $(".resources-drop-container").fadeToggle();
});

$("#solution-button").click(() => {
  $(".solution-drop-container").fadeToggle();
});

$("#product-button").click(() => {
  $("#down-arrow-image1").toggleClass("rotate180", "rotate0");
});

$("#solution-button").click(() => {
  $("#down-arrow-image2").toggleClass("rotate180", "rotate0");
});

$("#company-button").click(() => {
  $("#down-arrow-image3").toggleClass("rotate180", "rotate0");
});

$("#hamburger").click(() => {
  $("#mobile_navbar_container").slideToggle();
});

$("#resources-button").click(() => {
  $("#down-arrow-image4").toggleClass("rotate180", "rotate0");
});

AOS.init({
  duration: 1500,
  once: false,
  offset: 120,
  delay: 20,
});

// gsok

gsap
  .from(["#about_left_1,#about_left_2,#about_left_3,#about_left_4"], {
    y: -100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.5,
  })
  .to({
    y: 0,
    opacity: 1,
  });
