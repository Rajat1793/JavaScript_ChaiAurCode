// Destructuring of object

const course = {
    coursename: "javascript",
    price: 1232,
    instructor: 'rajat'
}

// course.instructor

const {instructor:inst} = course //destructure of object
console.log(inst);