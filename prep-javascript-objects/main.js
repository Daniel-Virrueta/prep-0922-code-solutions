var person = {
  firstName: 'Daniel',
  lastName: ' Virrueta',
  hobby: 'Fighting'
};
console.log(person);
var fullName = person.firstName + person.lastName;
console.log("The person's name is: ", fullName);
person.job = 'Upcoming Web Dev';
console.log("The person's current occupation:", person.job);
person.previousJob = 'Banker';
console.log("The person's previous occupation was: ", person.previousJob);
console.log('The complete person object:', person);
