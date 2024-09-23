const person = Object.freeze({
  name: Object.freeze({
    firstName: "Joe",
    lastName: "Biden",
  }),
  getName: function () {
    return this.name.firstName + " " + this.name.lastName;
  },
});

console.log(person.getName());

person.name.firstName = "Kamala";
person.name.lastName = "Harris";
console.log(person.getName());
