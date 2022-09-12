//This project is use to demonstrate asynchronous working of javascript

const washingMachine = require('./washingMachine');
const dishWasher = require('./dishWasher')

console.log("============Welcome to washing machine====================")
washingMachine.loadingDress()
washingMachine.washingDress()
console.log("=============Welcome to dish washer===================")
dishWasher.loadingPlates();
dishWasher.washingPlates();
washingMachine.dryingCloths()

