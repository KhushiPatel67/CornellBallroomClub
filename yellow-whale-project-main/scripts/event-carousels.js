console.log("JavaScript loaded!!!");
// This controls the left indicator button
$("#indicator-button-left").click(function() {
  if( $("#yule1-indicator").hasClass("red")){
    $("#yule1-indicator").removeClass("red");
    $("#yule1-indicator").addClass("white");
    $("#gatsby-indicator").removeClass("white");
    $("#gatsby-indicator").addClass("red");
    $("#gatsby-carousel").removeClass("hidden");
    $("#yule1-carousel").addClass("hidden");
  }
  else if( $("#gatsby-indicator").hasClass("red")){
    $("#gatsby-indicator").removeClass("red");
    $("#gatsby-indicator").addClass("white");
    $("#casino-indicator").removeClass("white");
    $("#casino-indicator").addClass("red");
    $("#casino-carousel").removeClass("hidden");
    $("#gatsby-carousel").addClass("hidden");
  }
  else if( $("#casino-indicator").hasClass("red")){
    $("#casino-indicator").removeClass("red");
    $("#casino-indicator").addClass("white");
    $("#havana-indicator").removeClass("white");
    $("#havana-indicator").addClass("red");
    $("#havana-carousel").removeClass("hidden");
    $("#casino-carousel").addClass("hidden");
  }
  else if( $("#havana-indicator").hasClass("red")){
    $("#havana-indicator").removeClass("red");
    $("#havana-indicator").addClass("white");
    $("#yule2-indicator").removeClass("white");
    $("#yule2-indicator").addClass("red");
    $("#yule2-carousel").removeClass("hidden");
    $("#havana-carousel").addClass("hidden");
  }
  else if( $("#yule2-indicator").hasClass("red")){
    $("#yule2-indicator").removeClass("red");
    $("#yule2-indicator").addClass("white");
    $("#yule1-indicator").removeClass("white");
    $("#yule1-indicator").addClass("red");
    $("#yule1-carousel").removeClass("hidden");
    $("#yule2-carousel").addClass("hidden");
  }
});
// This controls the right indicator button
$("#indicator-button-right").click(function() {
  if( $("#yule1-indicator").hasClass("red")){
    $("#yule1-indicator").removeClass("red");
    $("#yule1-indicator").addClass("white");
    $("#yule2-indicator").removeClass("white");
    $("#yule2-indicator").addClass("red");
    $("#yule2-carousel").removeClass("hidden");
    $("#yule1-carousel").addClass("hidden");
  }
  else if( $("#yule2-indicator").hasClass("red")){
    $("#yule2-indicator").removeClass("red");
    $("#yule2-indicator").addClass("white");
    $("#havana-indicator").removeClass("white");
    $("#havana-indicator").addClass("red");
    $("#havana-carousel").removeClass("hidden");
    $("#yule2-carousel").addClass("hidden");
  }
  else if( $("#havana-indicator").hasClass("red")){
    $("#havana-indicator").removeClass("red");
    $("#havana-indicator").addClass("white");
    $("#casino-indicator").removeClass("white");
    $("#casino-indicator").addClass("red");
    $("#casino-carousel").removeClass("hidden");
    $("#havana-carousel").addClass("hidden");
  }
  else if( $("#casino-indicator").hasClass("red")){
    $("#casino-indicator").removeClass("red");
    $("#casino-indicator").addClass("white");
    $("#gatsby-indicator").removeClass("white");
    $("#gatsby-indicator").addClass("red");
    $("#gatsby-carousel").removeClass("hidden");
    $("#casino-carousel").addClass("hidden");
  }
  else if( $("#gatsby-indicator").hasClass("red")){
    $("#gatsby-indicator").removeClass("red");
    $("#gatsby-indicator").addClass("white");
    $("#yule1-indicator").removeClass("white");
    $("#yule1-indicator").addClass("red");
    $("#yule1-carousel").removeClass("hidden");
    $("#gatsby-carousel").addClass("hidden");
  }
});
// This controls the left yule1 button
$("#yule1-button-left").click(function() {
  if( $("#yule1-img1").hasClass("selected")){
    $("#yule1-img1").removeClass("selected");
    $("#yule1-img1").addClass("hidden");
    $("#yule1-img3").removeClass("hidden");
    $("#yule1-img3").addClass("selected");
  }
  else if( $("#yule1-img3").hasClass("selected")){
    $("#yule1-img3").removeClass("selected");
    $("#yule1-img3").addClass("hidden");
    $("#yule1-img2").removeClass("hidden");
    $("#yule1-img2").addClass("selected");
  }
  else if( $("#yule1-img2").hasClass("selected")){
    $("#yule1-img2").removeClass("selected");
    $("#yule1-img2").addClass("hidden");
    $("#yule1-img1").removeClass("hidden");
    $("#yule1-img1").addClass("selected");
  }
});
// This controls the right yule1 button
$("#yule1-button-right").click(function() {
  if( $("#yule1-img1").hasClass("selected")){
    $("#yule1-img1").removeClass("selected");
    $("#yule1-img1").addClass("hidden");
    $("#yule1-img2").removeClass("hidden");
    $("#yule1-img2").addClass("selected");
  }
  else if( $("#yule1-img2").hasClass("selected")){
    $("#yule1-img2").removeClass("selected");
    $("#yule1-img2").addClass("hidden");
    $("#yule1-img3").removeClass("hidden");
    $("#yule1-img3").addClass("selected");
  }
  else if( $("#yule1-img3").hasClass("selected")){
    $("#yule1-img3").removeClass("selected");
    $("#yule1-img3").addClass("hidden");
    $("#yule1-img1").removeClass("hidden");
    $("#yule1-img1").addClass("selected");
  }
});
$("#yule2-button-left").click(function() {
  if( $("#yule2-img1").hasClass("selected")){
    $("#yule2-img1").removeClass("selected");
    $("#yule2-img1").addClass("hidden");
    $("#yule2-img5").removeClass("hidden");
    $("#yule2-img5").addClass("selected");
  }
  else if( $("#yule2-img5").hasClass("selected")){
    $("#yule2-img5").removeClass("selected");
    $("#yule2-img5").addClass("hidden");
    $("#yule2-img4").removeClass("hidden");
    $("#yule2-img4").addClass("selected");
  }
  else if( $("#yule2-img4").hasClass("selected")){
    $("#yule2-img4").removeClass("selected");
    $("#yule2-img4").addClass("hidden");
    $("#yule2-img3").removeClass("hidden");
    $("#yule2-img3").addClass("selected");
  }
  else if( $("#yule2-img3").hasClass("selected")){
    $("#yule2-img3").removeClass("selected");
    $("#yule2-img3").addClass("hidden");
    $("#yule2-img2").removeClass("hidden");
    $("#yule2-img2").addClass("selected");
  }
  else if( $("#yule2-img2").hasClass("selected")){
    $("#yule2-img2").removeClass("selected");
    $("#yule2-img2").addClass("hidden");
    $("#yule2-img1").removeClass("hidden");
    $("#yule2-img1").addClass("selected");
  }
});
// This controls the right yule2 button
$("#yule2-button-right").click(function() {
  if( $("#yule2-img1").hasClass("selected")){
    $("#yule2-img1").removeClass("selected");
    $("#yule2-img1").addClass("hidden");
    $("#yule2-img2").removeClass("hidden");
    $("#yule2-img2").addClass("selected");
  }
  else if( $("#yule2-img2").hasClass("selected")){
    $("#yule2-img2").removeClass("selected");
    $("#yule2-img2").addClass("hidden");
    $("#yule2-img3").removeClass("hidden");
    $("#yule2-img3").addClass("selected");
  }
  else if( $("#yule2-img3").hasClass("selected")){
    $("#yule2-img3").removeClass("selected");
    $("#yule2-img3").addClass("hidden");
    $("#yule2-img4").removeClass("hidden");
    $("#yule2-img4").addClass("selected");
  }
  else if( $("#yule2-img4").hasClass("selected")){
    $("#yule2-img4").removeClass("selected");
    $("#yule2-img4").addClass("hidden");
    $("#yule2-img5").removeClass("hidden");
    $("#yule2-img5").addClass("selected");
  }
  else if( $("#yule2-img5").hasClass("selected")){
    $("#yule2-img5").removeClass("selected");
    $("#yule2-img5").addClass("hidden");
    $("#yule2-img1").removeClass("hidden");
    $("#yule2-img1").addClass("selected");
  }
});
// this controls the left havana button
$("#havana-button-left").click(function() {
  if( $("#havana-img1").hasClass("selected")){
    $("#havana-img1").removeClass("selected");
    $("#havana-img1").addClass("hidden");
    $("#havana-img5").removeClass("hidden");
    $("#havana-img5").addClass("selected");
  }
  else if( $("#havana-img5").hasClass("selected")){
    $("#havana-img5").removeClass("selected");
    $("#havana-img5").addClass("hidden");
    $("#havana-img4").removeClass("hidden");
    $("#havana-img4").addClass("selected");
  }
  else if( $("#havana-img4").hasClass("selected")){
    $("#havana-img4").removeClass("selected");
    $("#havana-img4").addClass("hidden");
    $("#havana-img3").removeClass("hidden");
    $("#havana-img3").addClass("selected");
  }
  else if( $("#havana-img3").hasClass("selected")){
    $("#havana-img3").removeClass("selected");
    $("#havana-img3").addClass("hidden");
    $("#havana-img2").removeClass("hidden");
    $("#havana-img2").addClass("selected");
  }
  else if( $("#havana-img2").hasClass("selected")){
    $("#havana-img2").removeClass("selected");
    $("#havana-img2").addClass("hidden");
    $("#havana-img1").removeClass("hidden");
    $("#havana-img1").addClass("selected");
  }
});
// This controls the right havana button
$("#havana-button-right").click(function() {
  if( $("#havana-img1").hasClass("selected")){
    $("#havana-img1").removeClass("selected");
    $("#havana-img1").addClass("hidden");
    $("#havana-img2").removeClass("hidden");
    $("#havana-img2").addClass("selected");
  }
  else if( $("#havana-img2").hasClass("selected")){
    $("#havana-img2").removeClass("selected");
    $("#havana-img2").addClass("hidden");
    $("#havana-img3").removeClass("hidden");
    $("#havana-img3").addClass("selected");
  }
  else if( $("#havana-img3").hasClass("selected")){
    $("#havana-img3").removeClass("selected");
    $("#havana-img3").addClass("hidden");
    $("#havana-img4").removeClass("hidden");
    $("#havana-img4").addClass("selected");
  }
  else if( $("#havana-img4").hasClass("selected")){
    $("#havana-img4").removeClass("selected");
    $("#havana-img4").addClass("hidden");
    $("#havana-img5").removeClass("hidden");
    $("#havana-img5").addClass("selected");
  }
  else if( $("#havana-img5").hasClass("selected")){
    $("#havana-img5").removeClass("selected");
    $("#havana-img5").addClass("hidden");
    $("#havana-img1").removeClass("hidden");
    $("#havana-img1").addClass("selected");
  }
});
// this controls the left gatsby button
$("#gatsby-button-left").click(function() {
  if( $("#gatsby-img1").hasClass("selected")){
    $("#gatsby-img1").removeClass("selected");
    $("#gatsby-img1").addClass("hidden");
    $("#gatsby-img5").removeClass("hidden");
    $("#gatsby-img5").addClass("selected");
  }
  else if( $("#gatsby-img5").hasClass("selected")){
    $("#gatsby-img5").removeClass("selected");
    $("#gatsby-img5").addClass("hidden");
    $("#gatsby-img4").removeClass("hidden");
    $("#gatsby-img4").addClass("selected");
  }
  else if( $("#gatsby-img4").hasClass("selected")){
    $("#gatsby-img4").removeClass("selected");
    $("#gatsby-img4").addClass("hidden");
    $("#gatsby-img3").removeClass("hidden");
    $("#gatsby-img3").addClass("selected");
  }
  else if( $("#gatsby-img3").hasClass("selected")){
    $("#gatsby-img3").removeClass("selected");
    $("#gatsby-img3").addClass("hidden");
    $("#gatsby-img2").removeClass("hidden");
    $("#gatsby-img2").addClass("selected");
  }
  else if( $("#gatsby-img2").hasClass("selected")){
    $("#gatsby-img2").removeClass("selected");
    $("#gatsby-img2").addClass("hidden");
    $("#gatsby-img1").removeClass("hidden");
    $("#gatsby-img1").addClass("selected");
  }
});
// This controls the right gatsby button
$("#gatsby-button-right").click(function() {
  if( $("#gatsby-img1").hasClass("selected")){
    $("#gatsby-img1").removeClass("selected");
    $("#gatsby-img1").addClass("hidden");
    $("#gatsby-img2").removeClass("hidden");
    $("#gatsby-img2").addClass("selected");
  }
  else if( $("#gatsby-img2").hasClass("selected")){
    $("#gatsby-img2").removeClass("selected");
    $("#gatsby-img2").addClass("hidden");
    $("#gatsby-img3").removeClass("hidden");
    $("#gatsby-img3").addClass("selected");
  }
  else if( $("#gatsby-img3").hasClass("selected")){
    $("#gatsby-img3").removeClass("selected");
    $("#gatsby-img3").addClass("hidden");
    $("#gatsby-img4").removeClass("hidden");
    $("#gatsby-img4").addClass("selected");
  }
  else if( $("#gatsby-img4").hasClass("selected")){
    $("#gatsby-img4").removeClass("selected");
    $("#gatsby-img4").addClass("hidden");
    $("#gatsby-img5").removeClass("hidden");
    $("#gatsby-img5").addClass("selected");
  }
  else if( $("#gatsby-img5").hasClass("selected")){
    $("#gatsby-img5").removeClass("selected");
    $("#gatsby-img5").addClass("hidden");
    $("#gatsby-img1").removeClass("hidden");
    $("#gatsby-img1").addClass("selected");
  }
});
// this controls the left casino button
$("#casino-button-left").click(function() {
  if( $("#casino-img1").hasClass("selected")){
    $("#casino-img1").removeClass("selected");
    $("#casino-img1").addClass("hidden");
    $("#casino-img5").removeClass("hidden");
    $("#casino-img5").addClass("selected");
  }
  else if( $("#casino-img5").hasClass("selected")){
    $("#casino-img5").removeClass("selected");
    $("#casino-img5").addClass("hidden");
    $("#casino-img4").removeClass("hidden");
    $("#casino-img4").addClass("selected");
  }
  else if( $("#casino-img4").hasClass("selected")){
    $("#casino-img4").removeClass("selected");
    $("#casino-img4").addClass("hidden");
    $("#casino-img3").removeClass("hidden");
    $("#casino-img3").addClass("selected");
  }
  else if( $("#casino-img3").hasClass("selected")){
    $("#casino-img3").removeClass("selected");
    $("#casino-img3").addClass("hidden");
    $("#casino-img2").removeClass("hidden");
    $("#casino-img2").addClass("selected");
  }
  else if( $("#casino-img2").hasClass("selected")){
    $("#casino-img2").removeClass("selected");
    $("#casino-img2").addClass("hidden");
    $("#casino-img1").removeClass("hidden");
    $("#casino-img1").addClass("selected");
  }
});
// This controls the right casino button
$("#casino-button-right").click(function() {
  if( $("#casino-img1").hasClass("selected")){
    $("#casino-img1").removeClass("selected");
    $("#casino-img1").addClass("hidden");
    $("#casino-img2").removeClass("hidden");
    $("#casino-img2").addClass("selected");
  }
  else if( $("#casino-img2").hasClass("selected")){
    $("#casino-img2").removeClass("selected");
    $("#casino-img2").addClass("hidden");
    $("#casino-img3").removeClass("hidden");
    $("#casino-img3").addClass("selected");
  }
  else if( $("#casino-img3").hasClass("selected")){
    $("#casino-img3").removeClass("selected");
    $("#casino-img3").addClass("hidden");
    $("#casino-img4").removeClass("hidden");
    $("#casino-img4").addClass("selected");
  }
  else if( $("#casino-img4").hasClass("selected")){
    $("#casino-img4").removeClass("selected");
    $("#casino-img4").addClass("hidden");
    $("#casino-img5").removeClass("hidden");
    $("#casino-img5").addClass("selected");
  }
  else if( $("#casino-img5").hasClass("selected")){
    $("#casino-img5").removeClass("selected");
    $("#casino-img5").addClass("hidden");
    $("#casino-img1").removeClass("hidden");
    $("#casino-img1").addClass("selected");
  }
});
// This block of code makes each of the indicators a clickable button
$("#yule1-indicator").click(function() {
  if( $("#yule2-indicator").hasClass("red")){
    $("#yule2-indicator").removeClass("red");
    $("#yule2-indicator").addClass("white");
    $("#yule1-indicator").removeClass("white");
    $("#yule1-indicator").addClass("red");
    $("#yule1-carousel").removeClass("hidden");
    $("#yule2-carousel").addClass("hidden");
  }
  else if( $("#havana-indicator").hasClass("red")){
    $("#havana-indicator").removeClass("red");
    $("#havana-indicator").addClass("white");
    $("#yule1-indicator").removeClass("white");
    $("#yule1-indicator").addClass("red");
    $("#yule1-carousel").removeClass("hidden");
    $("#havana-carousel").addClass("hidden");

  }
  else if( $("#gatsby-indicator").hasClass("red")){
    $("#gatsby-indicator").removeClass("red");
    $("#gatsby-indicator").addClass("white");
    $("#yule1-indicator").removeClass("white");
    $("#yule1-indicator").addClass("red");
    $("#yule1-carousel").removeClass("hidden");
    $("#gatsby-carousel").addClass("hidden");

  }
  else if( $("#casino-indicator").hasClass("red")){
    $("#casino-indicator").removeClass("red");
    $("#casino-indicator").addClass("white");
    $("#yule1-indicator").removeClass("white");
    $("#yule1-indicator").addClass("red");
    $("#yule1-carousel").removeClass("hidden");
    $("#casino-carousel").addClass("hidden");
  }
});
$("#yule2-indicator").click(function() {
  if( $("#yule1-indicator").hasClass("red")){
    $("#yule1-indicator").removeClass("red");
    $("#yule1-indicator").addClass("white");
    $("#yule2-indicator").removeClass("white");
    $("#yule2-indicator").addClass("red");
    $("#yule2-carousel").removeClass("hidden");
    $("#yule1-carousel").addClass("hidden");
  }
  else if( $("#havana-indicator").hasClass("red")){
    $("#havana-indicator").removeClass("red");
    $("#havana-indicator").addClass("white");
    $("#yule2-indicator").removeClass("white");
    $("#yule2-indicator").addClass("red");
    $("#yule2-carousel").removeClass("hidden");
    $("#havana-carousel").addClass("hidden");

  }
  else if( $("#gatsby-indicator").hasClass("red")){
    $("#gatsby-indicator").removeClass("red");
    $("#gatsby-indicator").addClass("white");
    $("#yule2-indicator").removeClass("white");
    $("#yule2-indicator").addClass("red");
    $("#yule2-carousel").removeClass("hidden");
    $("#gatsby-carousel").addClass("hidden");

  }
  else if( $("#casino-indicator").hasClass("red")){
    $("#casino-indicator").removeClass("red");
    $("#casino-indicator").addClass("white");
    $("#yule2-indicator").removeClass("white");
    $("#yule2-indicator").addClass("red");
    $("#yule2-carousel").removeClass("hidden");
    $("#casino-carousel").addClass("hidden");
  }
});
$("#havana-indicator").click(function() {
  if( $("#yule1-indicator").hasClass("red")){
    $("#yule1-indicator").removeClass("red");
    $("#yule1-indicator").addClass("white");
    $("#havana-indicator").removeClass("white");
    $("#havana-indicator").addClass("red");
    $("#havana-carousel").removeClass("hidden");
    $("#yule1-carousel").addClass("hidden");
  }
  else if( $("#yule2-indicator").hasClass("red")){
    $("#yule2-indicator").removeClass("red");
    $("#yule2-indicator").addClass("white");
    $("#havana-indicator").removeClass("white");
    $("#havana-indicator").addClass("red");
    $("#havana-carousel").removeClass("hidden");
    $("#yule2-carousel").addClass("hidden");

  }
  else if( $("#gatsby-indicator").hasClass("red")){
    $("#gatsby-indicator").removeClass("red");
    $("#gatsby-indicator").addClass("white");
    $("#havana-indicator").removeClass("white");
    $("#havana-indicator").addClass("red");
    $("#havana-carousel").removeClass("hidden");
    $("#gatsby-carousel").addClass("hidden");

  }
  else if( $("#casino-indicator").hasClass("red")){
    $("#casino-indicator").removeClass("red");
    $("#casino-indicator").addClass("white");
    $("#havana-indicator").removeClass("white");
    $("#havana-indicator").addClass("red");
    $("#havana-carousel").removeClass("hidden");
    $("#casino-carousel").addClass("hidden");
  }
});
$("#gatsby-indicator").click(function() {
  if( $("#yule1-indicator").hasClass("red")){
    $("#yule1-indicator").removeClass("red");
    $("#yule1-indicator").addClass("white");
    $("#gatsby-indicator").removeClass("white");
    $("#gatsby-indicator").addClass("red");
    $("#gatsby-carousel").removeClass("hidden");
    $("#yule1-carousel").addClass("hidden");
  }
  else if( $("#yule2-indicator").hasClass("red")){
    $("#yule2-indicator").removeClass("red");
    $("#yule2-indicator").addClass("white");
    $("#gatsby-indicator").removeClass("white");
    $("#gatsby-indicator").addClass("red");
    $("#gatsby-carousel").removeClass("hidden");
    $("#yule2-carousel").addClass("hidden");

  }
  else if( $("#havana-indicator").hasClass("red")){
    $("#havana-indicator").removeClass("red");
    $("#havana-indicator").addClass("white");
    $("#gatsby-indicator").removeClass("white");
    $("#gatsby-indicator").addClass("red");
    $("#gatsby-carousel").removeClass("hidden");
    $("#havana-carousel").addClass("hidden");

  }
  else if( $("#casino-indicator").hasClass("red")){
    $("#casino-indicator").removeClass("red");
    $("#casino-indicator").addClass("white");
    $("#gatsby-indicator").removeClass("white");
    $("#gatsby-indicator").addClass("red");
    $("#gatsby-carousel").removeClass("hidden");
    $("#casino-carousel").addClass("hidden");
  }
});
$("#casino-indicator").click(function() {
  if( $("#yule1-indicator").hasClass("red")){
    $("#yule1-indicator").removeClass("red");
    $("#yule1-indicator").addClass("white");
    $("#casino-indicator").removeClass("white");
    $("#casino-indicator").addClass("red");
    $("#casino-carousel").removeClass("hidden");
    $("#yule1-carousel").addClass("hidden");
  }
  else if( $("#yule2-indicator").hasClass("red")){
    $("#yule2-indicator").removeClass("red");
    $("#yule2-indicator").addClass("white");
    $("#casino-indicator").removeClass("white");
    $("#casino-indicator").addClass("red");
    $("#casino-carousel").removeClass("hidden");
    $("#yule2-carousel").addClass("hidden");

  }
  else if( $("#havana-indicator").hasClass("red")){
    $("#havana-indicator").removeClass("red");
    $("#havana-indicator").addClass("white");
    $("#casino-indicator").removeClass("white");
    $("#casino-indicator").addClass("red");
    $("#casino-carousel").removeClass("hidden");
    $("#havana-carousel").addClass("hidden");

  }
  else if( $("#gatsby-indicator").hasClass("red")){
    $("#gatsby-indicator").removeClass("red");
    $("#gatsby-indicator").addClass("white");
    $("#casino-indicator").removeClass("white");
    $("#casino-indicator").addClass("red");
    $("#casino-carousel").removeClass("hidden");
    $("#gatsby-carousel").addClass("hidden");
  }
});
