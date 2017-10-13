$(document).ready(function() { 

//Get my elements

var random = document.getElementById("ranDisplay");
var wins = document.getElementById("counter");
var match =document.getElementById("matchbox");
var userScore = 0;
var userWins = 0;
var losses = 0;

// Need an array that goes from 19-120 (random number) and a function to display the selected random number in the #ranDisplay

function range(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}
var randomNum = range(19, 120); // [19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
console.log(randomNum);

// $("#random-" + i).attr('data-value', randomNum );
	console.log(randomNum);

	random.innerHTML = "<h1>Match Score:<br><br>" + randomNum + "</h1>" ;

// Need an array that goes from 1-12  (crystals) and a function that assigns each crystal a random value

var crystal = range(1, 12); // [1, 2, 3, 4, 5, 6, 7 . . .]
console.log(crystal);

var crystalMine = crystal[Math.floor(Math.random()*crystal.length)];
console.log(crystalMine);

for (var i = 0; i < 4; i++) {
	var crystal = range(1, 12); // [1, 2, 3, 4, 5, 6, 7 . . .]
	console.log(crystal);

	$("#crystal-" + i).attr('data-value', crystal );
	console.log(crystalMine);
}

// Need a function that displays the computed value of the #matchbox for each click .on("click") event

$('.gem-img').on("click", function() {
	console.log($(this).attr("data-value"));
	var crystalVal = parseInt($(this).attr("data-value"));
	console.log(typeof crystalVal)
	userScore = userScore + crystalVal;

	match.innerHTML = "<h1>Total Score:<br><br>" +  userScore +"</h1>";

// Need a function that declares a win/loss to be displayed in the #counter
    
          if (userScore === randomNum) {
            userWins++;
            $("#wins").html("<h2>Wins:" + userWins + "</h2>");
            reset();
          }
	        else if( userScore >= randomNum) {
            losses++;
            $("#losses").html("<h2>Losses:" + losses + "</h2>");
            reset();
          } 

})

reset(); 

// Need a function to restart gameplay by resetting the #ranDisplay and #matchbox, while retaining the number of wins/losses in the #counter

function reset() {
  randomNum = range(19, 120);
  console.log("new rando num", randomNum);
  userScore = 0;
  for (var i = 0; i < 4; i++) {
  	var crystal = range(1, 12); // [1, 2, 3, 4, 5, 6, 7 . . .]
  	console.log(crystal);
	$("#crystal-" + i).attr('data-value', crystal );
  	console.log(crystalMine);
  }
  
	random.innerHTML = "<h1>Match Score:<br><br>" + randomNum + "</h1>" ;
 
	match.innerHTML = "<h1>Total Score:<br><br>" +  userScore +"</h1>";
}

});