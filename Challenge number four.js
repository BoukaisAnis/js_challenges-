function checkSeason(month) {
    month = month.toLowerCase();


    switch (month) {
        case 'december':
        case 'january':
        case 'february':
            return 'Winter';
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';
        case 'september':
        case 'october':
        case 'november':
            return 'Autumn';
        default:
            return 'Invalid month';
    }
}



console.log(checkSeason('March'));  // Output: Spring
console.log(checkSeason('july'));   // Output: Summer
console.log(checkSeason('October')); // Output: Autumn
console.log(checkSeason('december')); // Output: Winter
console.log(checkSeason('abc'));     // Output: Invalid month