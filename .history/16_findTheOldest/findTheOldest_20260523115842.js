const findTheOldest = function(people) {
    return people.reduce((oldest, person) =>{
        // current year if no death year
        const currentYear = new Date ().getFullYear();
        // calculate the ages
        const oldestAge =
        (oldest.yearOfDeath || currentYear) - Oldest.YEAR
    } )

};

// Do not edit below this line
module.exports = findTheOldest;
