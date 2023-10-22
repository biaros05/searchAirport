"use strict";

!(function() { 
    // By the time you are in this location, you will have access to the AIRPORT_CODES array.

    /**
     * Generates li elements for a given list of airport names and deposits them in the ul.
     * 
     * @param {String} searchQuery A query to search for
     */
    function generateAirportDom(searchQuery) {
       const ul = document.getElementById("search-results");
       const LIs =  document.querySelectorAll("#search-results li");
       LIs.forEach((n) => n.remove());
        
       let codes = AIRPORT_CODES.filter((c) => {
            if (c.airport.toLowerCase().includes(searchQuery.target.value.toLowerCase()))
            {
                return true;
            }
       });

       codes = codes.map((e) => {
            let newLi = document.createElement("li");
            newLi.textContent = e.airport;
            newLi.setAttribute('data-airport-code', e.code);
            return(newLi);

       });

        codes.forEach((n) => {
            ul.appendChild(n);
       });

    }


    /**
     * Sets the selected airport on the page to the one represented by the given airport code.
     * 
     * @param {String} airportCode The code of the airport that you want to show as selected.
     */
    function setSelectedAirport(airportCode) {
        let selected = AIRPORT_CODES.find((e) => {
            return(e.code === airportCode);
        });
        console.log(selected)


        document.getElementById("name").textContent = selected.airport;
        document.getElementById("code").textContent = selected.code;
        document.getElementById("country").textContent = selected.country;

    }

    document.addEventListener("DOMContentLoaded", setup);

    function setup(e){
        const searchField = document.querySelector("#search-field");
        searchField.addEventListener("input", generateAirportDom);

        const ul = document.getElementById("search-results");
        ul.addEventListener("click", function(e){
            
            setSelectedAirport(e.target.getAttribute("data-airport-code"));
        });


    }
}());