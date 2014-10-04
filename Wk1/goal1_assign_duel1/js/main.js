// self-executing function
(function(){ // start of self-executing function

    console.log("FIGHT!!!"); // console.log beginning of the fight!

    //player name
    var playerOneName = "Spiderman"; // set player 1 name to Spiderman
    var playerTwoName = "Batman"; // set player 2 name to Batman

    //player damage
    var player1Damage = 20; // player 1 damage initially set to 20
    var player2Damage = 20; // player 2 damage initially set to 20

    //player health
    var playerOneHealth = 100; // player 1 health initially set to 100
    var playerTwoHealth = 100; // player 2 health initially set to 100

    //initiate round
    var round=0; // initiate the round

    function fight(){ // self-executing function
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); // alert user START
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner") // if the result is no winner, then run below code
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); // alert the round is over

            } else{ // if all else fails
                alert(result);
                break;
            }

          }
    }

    function winnerCheck(){ // self-executing function to check the winner
        var result="no winner"; // set to no winner
        if (playerOneHealth<1 && playerTwoHealth<1) // if both players are dead
        {
            result = "You Both Die"; // they both died
        } else if(playerOneHealth<1){ // else, if player one wins
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1) // else, if player two wins
        {
            result = playerOneName+" WINS!!!"
        }
       return result; // return the result
    }

    fight(); // start the function

})();