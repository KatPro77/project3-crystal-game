$(document).ready(function () {
    

    // create variables 
    var playerScore = 0;
    var wins = 0;
    var loss = 0;
    $("#wins").text(wins);
    $("#loss").text(loss);


    // create the random number to match, 19 - 120
    var random = Math.floor(Math.random() * 102) + 19;
    $("#randomNumber").text(random);

    // console.log("#random" + random);

    // random numbers for each skull (1-12) 
    var red = Math.floor(Math.random()*12) + 1;
    var blue = Math.floor(Math.random()*12) + 1;
    var yellow = Math.floor(Math.random()*12) + 1;
    var green = Math.floor(Math.random()*12) + 1;
 
    // console.log(red);
    // console.log(blue);
    // console.log(yellow);
    // console.log(green);



    //Start the game
    function gameStart() {
        random = Math.floor(Math.random() * 102) + 19;
        $("#randomNumber").text(random);
        red = Math.floor(Math.random()*12) + 1;
        blue = Math.floor(Math.random()*12) + 1;
        yellow = Math.floor(Math.random()*12) + 1;
        green = Math.floor(Math.random()*12) + 1;
        playerScore = 0;
        $("#totalNumber").text(playerScore);
    
    }

     // Display wins
    function gameWin(){
        alert("YOU WIN!");
        wins++; 
        $("#wins").text(wins);
        gameStart();
    }
    // Display losses
    function gameOver(){
        alert ("GAME OVER! Try again!");
        loss++;
        $("#loss").text(loss);
        gameStart();
    }

   
    // Skull buttons
    $("#red").on ("click", function(){
        playerScore = playerScore + red;
        // console.log("New playerTotal= " + playerTotal);
        $("#totalNumber").text(playerScore); 
              //Win & lose conditions
            if (playerScore == random){
              gameWin();
            }
            else if (playerScore > random){
              gameOver();
            }   
      })

      $("#blue").on ("click", function(){
        playerScore = playerScore + blue;
        // console.log("New playerTotal= " + playerTotal);
        $("#totalNumber").text(playerScore); 
              //Win & lose conditions
            if (playerScore == random){
              gameWin();
            }
            else if (playerScore > random){
              gameOver();
            }   
      })

      $("#yellow").on ("click", function(){
        playerScore = playerScore + yellow;
        // console.log("New playerTotal= " + playerTotal);
        $("#totalNumber").text(playerScore); 
              //Win & lose conditions
            if (playerScore == random){
              gameWin();
            }
            else if (playerScore > random){
              gameOver();
            }   
      })

      $("#green").on ("click", function(){
        playerScore = playerScore + green;
        // console.log("New playerTotal= " + playerTotal);
        $("#totalNumber").text(playerScore); 
              //Win & lose conditions
            if (playerScore == random){
              gameWin();
            }
            else if (playerScore > random){
              gameOver();
            }   
      })

      gameStart();

    });

    // $("#red").on("click", function() {
    //     score = score + parseInt(red);
    //     $("#totalNumber").text(score);


    //     if (score === random) {
    //         wins++;
    //         $("#wins").text("wins  " + win);
    //         alert("YOU WIN!!!");

    //         score = 0;
    //         $("#totalNumber").text(score);
    //         var randomNumber = Math.floor(Math.random() * 102) + 19;
    //         $("randomNumber").html(randomNumber);

    //     } else if (score > random) {

    //         loss++;
    //         $("#loss").text("loss  " + loss);
    //         alert("GAME OVER!!!")

    //         score = 0;
    //         $("#totalNumber").text(score);
    //         var randomNumber = Math.floor(Math.random() * 102) + 19;
    //         $("randomNumber").html(randomNumber);
    //     }



    // });

    // $("#blue").on("click", function() {
    //     score = score + parseInt(blue);
    //     $("#totalNumber").text(score);


    //     if (score === random) {
    //         wins++;
    //         $("#wins").text("wins  " + win);
    //         alert("YOU WIN!!!");

    //         score = 0;
    //         $("#totalNumber").text(score);
    //         var randomNumber = Math.floor(Math.random() * 102) + 19;
    //         $("randomNumber").html(randomNumber);

    //     } else if (score > random) {

    //         loss++;
    //         $("#loss").text("loss  " + loss);
    //         alert("GAME OVER!!!")

    //         score = 0;
    //         $("#totalNumber").text(score);
    //         var randomNumber = Math.floor(Math.random() * 102) + 19;
    //         $("randomNumber").html(randomNumber);
    //     }



    // });

    // $("#yellow").on("click", function() {
    //     score = score + parseInt(yellow);
    //     $("#totalNumber").text(score);


    //     if (score === random) {
    //         wins++;
    //         $("#wins").text("wins  " + win);
    //         alert("YOU WIN!!!");

    //         score = 0;
    //         $("#totalNumber").text(score);
    //         var randomNumber = Math.floor(Math.random() * 102) + 19;
    //         $("randomNumber").html(randomNumber);

    //     } else if (score > random) {

    //         loss++;
    //         $("#loss").text("loss  " + loss);
    //         alert("GAME OVER!!!")

    //         score = 0;
    //         $("#totalNumber").text(score);
    //         var randomNumber = Math.floor(Math.random() * 102) + 19;
    //         $("randomNumber").html(randomNumber);
    //     }



    // });

    // $("#green").on("click", function() {
    //     score = score + parseInt(green);
    //     $("#totalNumber").text(score);


    //     if (score === random) {
    //         wins++;
    //         $("#wins").text("wins  " + win);
    //         alert("YOU WIN!!!");

    //         score = 0;
    //         $("#totalNumber").text(score);
    //         var randomNumber = Math.floor(Math.random() * 102) + 19;
    //         $("randomNumber").html(randomNumber);

    //     } else if (score > random) {

    //         loss++;
    //         $("#loss").text("loss  " + loss);
    //         alert("GAME OVER!!!")

    //         score = 0;
    //         $("#totalNumber").text(score);
    //         var randomNumber = Math.floor(Math.random() * 102) + 19;
    //         $("randomNumber").html(randomNumber);
    //     }



    // });

    // newNumbers();



//     newGame();
    
  
           


   

// };
//     newtNumbers();
// 2) 

// 3) display wins/losses and total score
//         - CREATE FUNCTION / use IDs for HTML  - (get ElementByID????)

// 4) display random number
//         - CREATE FUNCTION 

// 5) CREATE FUNCTION for reset the game
//         function reset()



// 7) create IF and ELSE statements:

//         if Wins (total score) = random number
//             (create  winning alert)

//         if Loss > random number
//             (create decorative loss alert) - GAME OVER

//       use RESET funvtion

// REPEAT THIS FO ALL THE GEMS!! / or use # for all of them?? - check the hangman game

// 8) create on key/click event 

// -->