//snippets taken from "Introductory Interactivity JavaScript Snippets" provided in class

const TRES_SLIDES = $(".treasurer-img");
const PRES_SLIDES = $(".president-img");

const TRES_DOTS = $(".tres-dot");
const PRES_DOTS = $(".pres-dot");

function tresNextSlide() {
  let nextNum = TRES_SLIDES.index($(".treasurer-img:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > TRES_SLIDES.length) {
    nextNum = 1;
  }
  tresShowSlide(nextNum);
}

function presNextSlide() {
  let nextNum = PRES_SLIDES.index($(".president-img:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > PRES_SLIDES.length) {
    nextNum = 1;
  }
  presShowSlide(nextNum);
}

function tresPrevSlide() {
  let prevNum = TRES_SLIDES.index($(".treasurer-img:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = TRES_SLIDES.length;
  }
  tresShowSlide(prevNum);
}

function presPrevSlide() {
  let prevNum = PRES_SLIDES.index($(".president-img:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = PRES_SLIDES.length;
  }
  presShowSlide(prevNum);
}

function tresShowSlide(num) {
  let index = num - 1;
  let currentSlide = TRES_SLIDES.eq(index);

  /* TODO: snippets to hide SLIDES and then show currentSlide */

  TRES_SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
  tresFillDot(num);
}

function presShowSlide(num) {
  let index = num - 1;
  let currentSlide = PRES_SLIDES.eq(index);

  /* TODO: snippets to hide SLIDES and then show currentSlide */

  PRES_SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
  presFillDot(num);
}

function tresFillDot(num) {
  let index = num - 1;
  TRES_DOTS.removeClass("unfilled-dot");
  TRES_DOTS.removeClass("filled-dot");

  TRES_DOTS.each(function(i) {
    if (i == index) {
      $(this).addClass("filled-dot");
    } else {
      $(this).addClass("unfilled-dot");
    }
  })
}

function presFillDot(num) {
  let index = num - 1;
  PRES_DOTS.removeClass("unfilled-dot");
  PRES_DOTS.removeClass("filled-dot");

  PRES_DOTS.each(function(i) {
    if (i == index) {
      $(this).addClass("filled-dot");
    } else {
      $(this).addClass("unfilled-dot");
    }
  })
}

$("#forward-button1").click(function() {
  presNextSlide();
})

$("#forward-button2").click(function() {
  tresNextSlide();
})

$("#back-button1").click(function() {
  presPrevSlide();
})

$("#back-button2").click(function() {
  tresPrevSlide();
})

TRES_DOTS.each(function(index) {
  $(this).click(function() {
    tresShowSlide(index + 1);
  })
})

PRES_DOTS.each(function(index) {
  $(this).click(function() {
    presShowSlide(index + 1);
  })
})
