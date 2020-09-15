// coding challenge 1 
let markMass = 77;
let markHeight = 1.7;

let johnMass = 87;
let johnHeight = 1.8;

let markBmi = markMass / (markHeight * 2);
let johnBmi = johnMass / (johnHeight * 2);

let hasMarkHigherBmi = markBmi > johnBmi;

console.log('This is Mark BMI: ', markBmi);
console.log('This is John BMI: ', johnBmi);
console.log("Is Mark's BMI higher than John's? ", hasMarkHigherBmi);

// coding challenge 2
let johnAverageScore = (200 + 120 + 103) / 3;
let mikeAverageScore = (116 + 94 + 123) / 3;

if (johnAverageScore > mikeAverageScore) {
    console.log(`The winner in this match is: John!`);
} else if (johnAverageScore < mikeAverageScore) {
    console.log(`The winner in this match is: Mike!`);
} else {
    console.log("It's a draw!");
}

// coding challenge 3

let tips = [];
let finalPays = [];

function tipCalculator(bill) {
    let percentage;
    let billTip;
    let finalPayWithTips;
    if (bill < 50) {
        percentage = 0.2;
        billTip = (bill * percentage);
        finalPayWithTips = bill + billTip;

        tips.push(billTip);
        finalPays.push(finalPayWithTips);
    } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
        billTip = bill * percentage
        finalPayWithTips = bill + billTip;

        tips.push(billTip);
        finalPays.push(finalPayWithTips);
    } else {
        percentage = 0.1;
        billTip = bill * percentage
        finalPayWithTips = bill + billTip;

        tips.push(billTip);
        finalPays.push(finalPayWithTips);
    }
}

tipCalculator(124);
tipCalculator(48);
tipCalculator(268);

console.log('These are the tips: ' + tips);
console.log('These are the final pays: ' + finalPays);