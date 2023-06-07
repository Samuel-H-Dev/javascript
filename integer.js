const numberOne = 52347089573405837907;
const numberTwo = -48572936963574969236795;

const result = numberOne + numberTwo;
console.log("plus ",result);

// Math Operator
const result1 = numberOne - numberTwo;
console.log("minus ", result1)

const numberThree = 3843; 
const numberFour = 4;

//Math Operator: Modulus
console.log("😅 modulus ", numberThree % numberFour);

const variableOne = "10"
const variableTwo = 20
console.log(variableOne + variableTwo);

const variablethree = 10;
const variableFour = 20;
const variableFive = "30";
const variableSix = 20;
const resultTwo = variablethree + variableFour + variableFive + variableSix
console.log(resultTwo);

console.log(typeof resultTwo);

const bestSchool = "bocaCode";


const favoriteNumber = (nim) => {
    if(bestSchool.length ==  8) {
            return Math.floor(Math.random() * nim);
           return nim;
        }else{
        nim = 10;
    return nim;
    }}


console.log(favoriteNumber(800));