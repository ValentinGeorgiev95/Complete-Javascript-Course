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