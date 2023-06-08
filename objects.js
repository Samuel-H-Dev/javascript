const student = {
    firstName: "Lorenzo",
    lastName: "Moltwa",
    age: 19,
    student: true,
}
console.log(student.firstName);


//-------------Lets get a bit more advanced---------------//

//creating an object from separate variables:

const make = "audi";
const model = "a3";
const year = 2019;

const myCar = {make, model, year}; // assembles 3 variables into a single object

//frequently, we have an object and we want to break it into separate variables

// ***** this is called destucturing ******

//we have an object :

const movie = {
    title: "Fight Club",
    writer: "Chuck P.",
    year: 1999,
    genre: "action",
}

const movieYear = movie.year;
const movieTitle = movie.title;
const movieWriter = movie.writer;
const movieGenre = movie.year; 


// better way to write it.
const {title, writer, genre} = movie  

console.log(title);