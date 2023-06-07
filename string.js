let firstName = "Samuel";
const bestSchool = "bocaCode";
const shirt = "blue"

console.log(firstName);
console.log(shirt);

const favoriteNumber = ((nim) => {
    if(bestSchool.length ==  nim) {
           nim = Math.floor(Math.random() * 100);
           return nim;
        }else{
        nim = 10;
    return nim;
    }})


console.log(favoriteNumber(8));