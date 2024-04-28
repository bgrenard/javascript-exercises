const findTheOldest = function(people) {
    const sorted = people.sort((a,b) => {
        let ageA;
        let ageB;
        
        if (typeof a.yearOfDeath !== 'undefined') {
            ageA = a.yearOfDeath - a.yearOfBirth;
        }
        else {
            const currentYear = new Date().getFullYear();
            ageA = currentYear - a.yearOfBirth;
        }

        if (typeof b.yearOfDeath !== 'undefined') {
            ageB = b.yearOfDeath - b.yearOfBirth;
        }
        else {
            const currentYear = new Date().getFullYear();
            ageB = currentYear - b.yearOfBirth;
        }

        return ageB - ageA;
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
