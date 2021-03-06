"use strict";
/*
IF / ELSE IF / ELSE
Create a function called getToDestination which will help determine how a person can get to their destination!
    It will accept 4 arguments and the parameter names are:
    age - the age of the rider
isInsured - a boolean telling the function if the rider has insurance
hasCar - a boolean describing if the rider has a car
canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
If the rider is over 16, has insurance, and has a car then they can use their own vehicle
If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a
rideshare service
If the rider meets none of the above, they should call a friend for a ride!
    This getToDestination should not return any value, but rather console log based on the conditions met.*/
/*getToDestination, part 2
Create a function called canGetRideshare() which will RETURN a boolean
It will determine if there are drivers nearby and the person has enough money for the ride
Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
Call canGetRideshare() in the else if after !isLegalDriver &&...
Be sure to log to the user if they can or cannot get a rideshare*/


/*function getToDestination(age, isInsured, hasCar, isDrunk) {
    if (age >= 16 && isInsured && hasCar && !isDrunk) {
        console.log('Drive yourself.');
    } else if (canGetRideshare(true, true)) {
        console.log('You should get a ride. There appears to be one available.');
    } else if (isDrunk) {
        console.log('Please don\'t drive, you idiot. Rideshare is unavailable. Call a friend or walk.');
    } else {
        console.log('You should call a friend for a ride or you will be stuck here FOREVER.');
    }
}

function canGetRideshare(driverNearby, hasEnoughMoneys) {
    if (driverNearby && hasEnoughMoneys) {
        return true;
    } else {
        return false
    }
}

getToDestination(16, false, false, true);
getToDestination(35, true, true, true);
getToDestination(21, true, true, false);
getToDestination(80, true, false, true);
getToDestination(80, true, false, false);*/

/*function checkWeather(todaysWeather) {
    if (todaysWeather.toLowerCase() === 'snowing') {
        console.log('Please stay inside.');
    } else if (todaysWeather.toLowerCase() === 'raining') {
        console.log('Grab an umbrella-ella-ella.');
    } else if (todaysWeather.toLowerCase() === 'hailing') {
        console.log('Cover your car. There\'s hail afoot.');
    } else {
        console.log('Go outside. It\'s sunny.');
    }
}

checkWeather('snowing');
checkWeather('bs response');
checkWeather('HAILING');*/

//Alternate to previous if/else structure but instead using switch cases
function checkWeather(todaysWeather) {
    todaysWeather = todaysWeather.toLowerCase();
    switch (todaysWeather) {
        case "snowing":
            console.log('Please stay inside. It\'s snowing.');
            break;
        case 'raining':
            console.log('Grab an umbrella.');
            break;
        case 'hailing':
            console.log("Cover your car. Hail is afoot.");
            break;
        default:
            console.log('Go play outside.');
            break;
    }}

checkWeather('hailing');
checkWeather('SNOWING');





