$(document).ready(function () {

  //set up variables
  //random number is target number
  var randomNum = randomNumGen();
  //console.log(randomNumGen);
  var wins = 0;
  var losses = 0;
  var totalScore = 0;

  //set up HTML variables
  var $randomNum = $("#randomNum");
  var $wins = $("#wins");
  var $losses = $("#losses");
  var $totalScore = $("#totalScore");

  //create function to generate random number and resets total score
  function randomNumGen() {
    return Math.floor(Math.random() * 102) + 19;
  }
  

  function randomCrystalVal() {
    return Math.floor(Math.random() * 12) + 1;
  }

  //crystal images need on click function and totalScore adds up
  //crystal images need random numbers that are hidden (.attr)
  //user wins if their score matches the random generated number
  //user loses if their score goes over the random generated number
  //post wins and losses
  $("#img1").attr("data-crystalVal", randomCrystalVal());
  $("#img2").attr("data-crystalVal", randomCrystalVal());
  $("#img3").attr("data-crystalVal", randomCrystalVal());
  $("#img4").attr("data-crystalVal", randomCrystalVal());
  $randomNum.text(randomNum);

  $(".crystal").on("click", function () {
    var value = $(this).attr("data-crystalVal");
    value = parseInt(value);
    //console.log(value);
    totalScore += value;
    //console.log(totalScore + "total score");
    if (totalScore > randomNum) {
      alert("You Lost!");
      losses++;
    }
    if (randomNum === totalScore) {
      alert("You Win!");
      wins++;
    }
    $totalScore.text(totalScore);
    $wins.text(wins);
    $losses.text(losses);

    //line 55 
  });
  //don't delete
});