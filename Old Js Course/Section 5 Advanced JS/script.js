// Function constructor

// let john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// this is empty object
// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
//     console.log(2016 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// // this creates an object based on Person
// let john = new Person('John', 1990, 'teacher');
// let jane = new Person('Jane', 1969, 'designer');
// let mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName, jane.lastName, mark.lastName)


// Object.create
// let personProto = {
//     calculateAge: function () {
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// let john = Object.create(personProto);

// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = "teacher";

// Object.create приема втори параметър и чрез value: даваме стойност и правим key - value paired обект
// let jane = Object.create(personProto, {
//     name: {
//         value: 'Jane'
//     },
//     yearOfBirth: {
//         value: 1969
//     },
//     job: {
//         value: 'designer'
//     }
// })

// Primitives vs objects
// Primitives
// let a = 23;
// let b = a;
// a = 46;
// console.log(a);
// console.log(b);


// Objects
// let obj1 = {
//     name: 'John',
//     age: 26
// }
// let obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);


// Functions
// let age = 27;
// let obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// }

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

// coding challenge 7

let questionAnswerPrompt, questions, questionDisplay, score = 0;
let Question = function (question, answers, correctAnswer) {
    this.question = question,
        this.answers = answers,
        this.correctAnswer = correctAnswer
}

let blackColor = new Question('What is the correct hex color of black ?', ['0: #000', '1: #111', '2: #222'], 0);
let whiteColor = new Question('What is the correct hex color of white ?', ['0: #000', '1: #fff', '2: #222'], 1);
let sky = new Question('What color is the sky ?', ['0: black', '1: white', '2: blue'], 2);

questions = [];
questions.push(blackColor, whiteColor, sky);
//console.log(questions);

function quiz() {
    questionDisplay = Math.floor(Math.random() * 3);
    console.log(questionDisplay);

    if (questionDisplay === 0) {
        //console.log(questions[0]);
        console.log(questions[questionDisplay].question);
        console.log(questions[questionDisplay].answers[0]);
        console.log(questions[questionDisplay].answers[1]);
        console.log(questions[questionDisplay].answers[2]);

        questionAnswerPrompt = prompt("Please enter you answer!");
        console.log(questionAnswerPrompt);

        if (questionAnswerPrompt === '0') {
            console.log('This is the correct answer!');
            score++;
            console.log('Your score is:', score);
            quiz();
        } else {
            console.log('The correct Answer was 0');
            // quiz();
        }
    } else if (questionDisplay === 1) {
        //console.log(questions[1]);
        console.log(questions[questionDisplay].question);
        console.log(questions[questionDisplay].answers[0]);
        console.log(questions[questionDisplay].answers[1]);
        console.log(questions[questionDisplay].answers[2]);
        questionAnswerPrompt = prompt("Please enter you answer!");
        console.log(questionAnswerPrompt);

        if (questionAnswerPrompt === '1') {
            console.log('This is the correct answer!');
            score++;
            console.log('Your score is:', score);
            quiz();
        } else {
            console.log('The correct Answer was 1');
        }
    } else if (questionDisplay === 2) {
        console.log(questions[questionDisplay].question);
        console.log(questions[questionDisplay].answers[0]);
        console.log(questions[questionDisplay].answers[1]);
        console.log(questions[questionDisplay].answers[2]);

        questionAnswerPrompt = prompt("Please enter you answer!");
        console.log(questionAnswerPrompt);

        if (questionAnswerPrompt === '2') {
            console.log('This is the correct answer!');
            score++;
            console.log('Your score is:', score);
            quiz();
        } else {
            console.log('The correct Answer was 2');
        }
    } else {
        if (questionAnswerPrompt === 'exit') {
            console.log('You exited the game!');
            console.log('Your total score is: ', score);
        }
    }
}

quiz();