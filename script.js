//create two case for each, the years below 2 and after two
let myAge =parseInt(prompt('Enter your age'));
let earlyYears =  2;
let laterYears = myAge -earlyYears;
laterYears*=4;
earlyYears *= 10.5;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = laterYears + earlyYears;
let myName = "Erkin".toLowerCase();       //Entered my Name and converted it to lower case
alert(`My name is ${myName.toUpperCase()}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)