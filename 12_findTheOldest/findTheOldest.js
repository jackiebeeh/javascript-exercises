const findTheOldest = function(people) {
    for (person of people) {
        if (person.yearOfDeath == undefined){
            let thisYear = (new Date).getFullYear();
            person.yearOfDeath = thisYear
        }
        person.age = (+(person.yearOfDeath) - +(person.yearOfBirth));
    }
    let highestAge = 0;
    for (person of people) {
        highestAge = Math.max(highestAge, person.age);
    }
    let result = people.find(person => person.age === highestAge);
    return result;
};


// calculate and add the age to each person in people list
// find the highest value from the persons ages
// find the person name with the highest age


// Do not edit below this line
module.exports = findTheOldest;
