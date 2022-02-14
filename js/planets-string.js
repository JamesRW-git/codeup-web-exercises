(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

     console.log(planetsArray);

     var stringBr = planetsArray.join('<br>');
     console.log(stringBr);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * Perhaps for when we're using it in an HTML file some of the formatting is already done?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    function buildPlanetUl(arrayOfPlanets) {
        let newString = '<ul>';
        for (let i = 0; i < arrayOfPlanets.length; i++) {
            newString += '<li>'
            newString += arrayOfPlanets[i];
            newString += '</li>'
        }
        newString += '</ul>'
        return newString;
    }

    console.log(buildPlanetUl(planetsArray));

})();