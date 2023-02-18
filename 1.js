const person = {
    name: "John",
    sayHello: function () {
        console.log("Hello, my name is " + this.name);
    },
};

const student = Object.create(person);
student.study = function () {
    console.log(this.name + " is studying.");
};

for (let key in student) {
    if (student.hasOwnProperty(key)) {
      console.log(key + ": " + student[key]);
    }
}