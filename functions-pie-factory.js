//pie faxctory
//1. create a function  that makes pies 
//2. repeat the string as many times as the quanity of the order
//
//
//sample 
//const result = makepie(10)
//result = 🥧🥧🥧🥧🥧🥧🥧🥧🥧🥧

const result = (amountOfPies =1) => {
  return  "🥧".repeat(amountOfPies);
    }

    console.log(result(Math.random()*100));