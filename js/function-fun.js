"use strict";

tryGetRideshare(20, true, prompt("How much money you got?"));

function getFundsAvailable(){
    let moneyInAccount = parseFloat(prompt("How much (USD) is in the account?"));
    let creditsInAccount = parseFloat(prompt("How much (credit) is in the account?"));

    return moneyInAccount + creditsInAccount;
}

function tryGetRideshare(costOfRide, driverAvailable, totalFundsAvailable) {
    if (confirm("Are you splitting the cost of this ride with someone else?")) {
        numOfRiders = prompt("How many additional riders do you have?");
    }
    if (numOfRiders){

    }
}
//don't know how much the ride will be - DONE
//don't know if a driver is nearby - DONE
//maybe there are other money sources
//how much money is availabe? - DONE
if(driverAvailable && totalFundsAvailable >= costOfRide) {
        console.log("Your ride will arrive shortly.");
} else {
        console.log("No drivers are available at this time.");
        }


