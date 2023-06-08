const students = ['Sam', 'Cihan', 'Ariana', 'Yaslin', 'Kevin'];

console.log(students[2]);

console.log(students.length);

students.push('Lorenzo');
students.unshift('Andrew')

console.log(students);

////lets create an array of objects

const courses = [
    {title: "software Enginering", type: 'fulltime', weeks: 10},
    {title: "Game Dev", type: "part-time", weeks: 3},
    {title: "Data Analytics", type: "part-Time", weeks: 3 }
]

console.log(courses[1].title)