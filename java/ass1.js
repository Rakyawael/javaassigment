function printNumber() {
     const number = document.getElementById("numberInput").value;
     console.log(`Output: ${number}`);
 }


function checkDivisibility() {
    const number = Number(document.getElementById("numberInput").value);
  if (number % 3 ===0 && number % 4 ===0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

//3
function findMax() {
    
    const num1 = Number(document.getElementById("number1").value);
    const num2 = Number(document.getElementById("number2").value);

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers");
        return;
    }
    let max;
    if (num1 > num2) {
        max = num1;
    } else {
        max = num2;
    }

    console.log(`Output: ${max}`);
}

//4
function checkNumber() {
    const number = Number(document.getElementById("numberInput").value);

    if (isNaN(number)) {
        console.log("Please enter a valid number");
        return;
    }
    if (number < 0) {
        console.log("negative");
    } else {
        console.log("positive");
    }
}

//5
function findMaxMin() {
    const num1 = Number(prompt("Enter the first number:"));
    const num2 = Number(prompt("Enter the second number:"));
    const num3 = Number(prompt("Enter the third number:"));
let max, min;

   
    if (num1 >= num2 && num1 >= num3) {
        max = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        max = num2;
    } else {
        max = num3;
    }

   
    if (num1 <= num2 && num1 <= num3) {
        min = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        min = num2;
    } else {
        min = num3;
    }
    console.log(`Max element = ${max}`);
    console.log(`Min element = ${min}`);
}

//6
function checkEvenOdd() {
  
    const num = Number(prompt("Enter an integer number:"));
    if (isNaN(num) || !Number.isInteger(num)) {
        console.log("Please enter a valid integer.");
        return;
    }

    if (num % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}


//7
function checkVowelConsonant() {
    const char = prompt("Enter a single character:").toLowerCase();
    if (!char || char.length !== 1 || !isNaN(char)) {
        console.log("Please enter a valid single alphabet character.");
        return;
    }
    if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
        console.log("The character is a consonant.");
    } else {
        console.log("The character is a vowel.");
    }
}

//8
function printNumbers() {
    const num = Number(prompt("Enter an integer:"));

    if (isNaN(num) || !Number.isInteger(num) || num < 1) {
        console.log("Please enter a valid positive integer.");
        return;
    }
    let result = "";
    for (let i = 1; i <= num; i++) {
        if (i === num) {
            result += i;  
        } else {
            result += i + ", ";  
        }
    }

    console.log(result);
}

//9
function generateMultiplicationTable() {
    const num = Number(prompt("Enter an integer:"));

    if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
        console.log("Please enter a valid positive integer.");
        return;
    }
    let table = "";
    for (let i = 1; i <= 12; i++) {
        table += num * i + (i === 12 ? "" : " "); 
    }
    console.log(table);
}

//10
function printEvenNumbers() {
    const num = Number(prompt("Enter a number:"));
    if (isNaN(num) || !Number.isInteger(num) || num < 1) {
        console.log("Please enter a valid positive integer.");
        return;
    }
    let result = "";

    for (var i = 2; i <= num; i += 2) {
        result += i;
        
        if (i !== num && i !== num - 1) {
            result += " ";
        }
    }
    console.log(result);
}

//11
function calculatePower() {
    const base = Number(prompt("Enter the base number:"));
    const exponent = Number(prompt("Enter the exponent number:"));

    if (isNaN(base) || isNaN(exponent) || !Number.isInteger(base) || !Number.isInteger(exponent)) {
        console.log("Please enter valid integers for both base and exponent.");
        return;
    }

    let result = 1;

    for (var i = 1; i <= exponent; i++) {
        result *= base;
    }

    console.log(result);
}

//12
function calculateMarks() {
    let totalMarks = 0;
    const numSubjects = 5;

    for (let i = 1; i <= numSubjects; i++) {
        let mark = Number(prompt(`Enter marks for subject ${i}:`));
        
        if (isNaN(mark) || mark < 0 || mark > 100) {
            console.log("Please enter valid marks between 0 and 100.");
            return;
        }

        totalMarks += mark;
    }

    const averageMarks = totalMarks / numSubjects;
    const percentage = (totalMarks / (numSubjects * 100)) * 100;

    console.log(`Total marks = ${totalMarks}`);
    console.log(`Average marks = ${averageMarks}`);
    console.log(`Percentage = ${percentage}%`);
}

//13
function daysInMonth() {
    var month = Number(prompt("Enter month number:"));

    if (isNaN(month) || month < 1 || month > 12) {
        console.log("Please enter a valid month number between 1 and 12.");
        return;
    }

    var days;

    if (month === 2) {
        var year = Number(prompt("Enter year to check leap year:"));
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            days = 29;
        } else {
            days = 28;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        days = 30;
    } else {
        days = 31;
    }

    console.log("Days in month: " + days);
}

//14
function calculateGrade() {
    var physics = Number(prompt("Enter marks for Physics:"));
    var chemistry = Number(prompt("Enter marks for Chemistry:"));
    var biology = Number(prompt("Enter marks for Biology:"));
    var mathematics = Number(prompt("Enter marks for Mathematics:"));
    var computer = Number(prompt("Enter marks for Computer:"));

    if (isNaN(physics) || isNaN(chemistry) || isNaN(biology) || isNaN(mathematics) || isNaN(computer) ||
        physics < 0 || chemistry < 0 || biology < 0 || mathematics < 0 || computer < 0) {
        console.log("Please enter valid marks between 0 and 100.");
        return;
    }

    var totalMarks = physics + chemistry + biology + mathematics + computer;
    var percentage = (totalMarks / 500) * 100;

    var grade;

    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else if (percentage >= 40) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    console.log("Total Marks: " + totalMarks);
    console.log("Percentage: " + percentage + "%");
    console.log("Grade: " + grade);
}


//15
function daysInMonth() {
    var month = Number(prompt("Enter month number:"));

    if (isNaN(month) || month < 1 || month > 12) {
        console.log("Please enter a valid month number between 1 and 12.");
        return;
    }

    var days;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            var year = Number(prompt("Enter year to check leap year:"));
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                days = 29;
            } else {
                days = 28;
            }
            break;
        default:
            console.log("Invalid month number.");
            return;
    }

    console.log("Days in month: " + days);
}


//16
function checkVowelOrConsonant() {
    var char = prompt("Enter an alphabet character:");

    if (!char || char.length !== 1 || !isNaN(char)) {
        console.log("Please enter a valid single alphabet character.");
        return;
    }

    var lowerChar = char.toLowerCase();

    switch (lowerChar) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            console.log(char + " is a vowel.");
            break;
        default:
            console.log(char + " is a consonant.");
            break;
    }
}

//17
function findMax() {
    var num1 = Number(prompt("Enter the first number:"));
    var num2 = Number(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
        return;
    }

    var result;

    switch (true) {
        case (num1 > num2):
            result = num1;
            break;
        case (num2 > num1):
            result = num2;
            break;
        default:
            result = "Both numbers are equal.";
            break;
    }

    console.log("The maximum number is: " + result);
}


//18
function checkEvenOdd() {
    var num = Number(prompt("Enter a number:"));

    if (isNaN(num)) {
        console.log("Please enter a valid number.");
        return;
    }

    var result;

    switch (num % 2) {
        case 0:
            result = "Even";
            break;
        case 1:
            result = "Odd";
            break;
        default:
            result = "Invalid number";
            break;
    }

    console.log("The number is: " + result);
}


//19
function checkNumber() {
    var num = Number(prompt("Enter a number:"));

    if (isNaN(num)) {
        console.log("Please enter a valid number.");
        return;
    }

    var result;

    switch (true) {
        case (num > 0):
            result = "Positive";
            break;
        case (num < 0):
            result = "Negative";
            break;
        case (num === 0):
            result = "Zero";
            break;
        default:
            result = "Invalid number";
            break;
    }

    console.log("The number is: " + result);
}

//20
function calculate() {
    var num1 = Number(prompt("Enter the first number:"));
    var num2 = Number(prompt("Enter the second number:"));
    var operator = prompt("Enter operator :");

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
        return;
    }

    var result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator. Please enter one of +, -, *, /.");
            return;
    }

    console.log("Result: " + result);
}


