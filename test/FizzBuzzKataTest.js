var runTestSuite = require("../src/TestingFramework");

function fizzBuzz(number) {
    if (number % 15 === 0) return "FizzBuzz";
    if (number % 5 === 0) return "Buzz";
    if (number % 3 === 0) return "Fizz";
    return number.toString();
}

runTestSuite(function (t) {
    this.testNormalNumberIsReturned = function () {
        t.assertEqual("1", fizzBuzz(1));
    };

    this.testAnotherNormalNumberIsReturned = function() {
        t.assertEqual("2", fizzBuzz(2));
    };

    this.testFizzIsReturned = function () {
        t.assertEqual("Fizz", fizzBuzz(3));
    };

    this.testFizzIsReturnedForDifferentNumber = function () {
        t.assertEqual("Fizz", fizzBuzz(6));
    };

    this.testBuzzIsReturned = function () {
        t.assertEqual("Buzz", fizzBuzz(5));
    };

    this.testBuzzIsReturnedForDifferentNumber = function () {
        t.assertEqual("Buzz", fizzBuzz(10));
    };

    this.testFizzBuzzIsReturned = function () {
        t.assertEqual("FizzBuzz", fizzBuzz(15));
    };

    this.testFizzBuzzIsReturnedForDifferentNumber = function () {
        t.assertEqual("FizzBuzz", fizzBuzz(30));
    };
});
