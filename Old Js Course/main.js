// // coding challenge 1 
// let markMass = 77;
// let markHeight = 1.7;

// let johnMass = 87;
// let johnHeight = 1.8;

// let markBmi = markMass / (markHeight * 2);
// let johnBmi = johnMass / (johnHeight * 2);

// let hasMarkHigherBmi = markBmi > johnBmi;

// console.log('This is Mark BMI: ', markBmi);
// console.log('This is John BMI: ', johnBmi);
// console.log("Is Mark's BMI higher than John's? ", hasMarkHigherBmi);

// // coding challenge 2
// let johnAverageScore = (200 + 120 + 103) / 3;
// let mikeAverageScore = (116 + 94 + 123) / 3;

// if (johnAverageScore > mikeAverageScore) {
//     console.log(`The winner in this match is: John!`);
// } else if (johnAverageScore < mikeAverageScore) {
//     console.log(`The winner in this match is: Mike!`);
// } else {
//     console.log("It's a draw!");
// }

// // coding challenge 3

// let tips = [];
// let finalPays = [];

// function tipCalculator(bill) {
//     let percentage;
//     let billTip;
//     let finalPayWithTips;
//     if (bill < 50) {
//         percentage = 0.2;
//         billTip = (bill * percentage);
//         finalPayWithTips = bill + billTip;

//         tips.push(billTip);
//         finalPays.push(finalPayWithTips);
//     } else if (bill >= 50 && bill <= 200) {
//         percentage = 0.15;
//         billTip = bill * percentage
//         finalPayWithTips = bill + billTip;

//         tips.push(billTip);
//         finalPays.push(finalPayWithTips);
//     } else {
//         percentage = 0.1;
//         billTip = bill * percentage
//         finalPayWithTips = bill + billTip;

//         tips.push(billTip);
//         finalPays.push(finalPayWithTips);
//     }
// }

// tipCalculator(124);
// tipCalculator(48);
// tipCalculator(268);

// console.log('These are the tips: ' + tips);
// console.log('These are the final pays: ' + finalPays);

// // coding challenge 4

// let john = {
//     firstName: "john",
//     lastName: "smith",
//     mass: 87,
//     height: 1.8,
//     bmiCalc: function () {
//         this.bmi = this.mass / (this.height * 2);
//         return this.bmi;
//     }
// }

// let mark = {
//     firstName: "mark",
//     lastName: "smith",
//     mass: 77,
//     height: 1.7,
//     bmiCalc: function () {
//         this.bmi = this.mass / (this.height * 2);
//         return this.bmi;
//     }
// }

// console.log("This is John's: ", john.bmiCalc());
// console.log("This is Marks's: ", mark.bmiCalc());
// if (john.bmi > mark.bmi) {
//     console.log(john.firstName + ' ' + john.lastName + ' ' + 'has bigger BMI');
// } else {
//     console.log(mark.firstName + ' ' + mark.lastName + ' ' + 'has bigger BMI');
// }

// coding challenge 5

let john = {
    firstName: "john",
    lastName: "smith",
    bills: [124, 48, 268, 180, 42],
    tips: [],
    tipCalculator: function (bills) {
        for (let i = 0; i <= bills.length - 1; i++) {
            let tipPercentage;
            let tip;
            if (bills[i] < 50) {
                tipPercentage = 0.2;
                tip = bills[i] * tipPercentage;
                this.tips.push(tip);

                let totalBill;
                totalBill = bills[i] + tip;
                this.totalBills.push(totalBill);
            } else if (bills[i] >= 50 && bills[i] <= 200) {
                tipPercentage = 0.15;
                tip = bills[i] * tipPercentage;
                this.tips.push(tip);

                let totalBill;
                totalBill = bills[i] + tip;
                this.totalBills.push(totalBill);
            } else {
                tipPercentage = 0.1;
                tip = bills[i] * tipPercentage;
                this.tips.push(tip);

                let totalBill;
                totalBill = bills[i] + tip;
                this.totalBills.push(totalBill);
            }
        }
    },
    totalBills: []
}

john.tipCalculator(john.bills);

console.log(john);

function averageOfTips(tip) {
    let sumTips = 0;
    for (let i = 0; i <= tip.length - 1; i++) {
        sumTips = sumTips + tip[i];
    }

    return sumTips / tip.length;
}

let johnAverageTips = averageOfTips(john.tips);
console.log(johnAverageTips);