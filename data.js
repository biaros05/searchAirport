"use strict";

// Retrieve the airport codes from a sidecar JSON file, and
// convert it to a format that we will like using more.
// We'll talk about JSON next week.

const AIRPORT_CODES = [];
fetch('airport-codes.json')
    .then((response) => response.json())
    .then((data) => { 
        AIRPORT_CODES.push(...Object.keys(data)
            .map( (code) => { 
                return { code, ...data[code] };
            })
        );
    });
