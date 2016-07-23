var assertions = {
    assertTrue: function (condition, message) {
        if (!condition) {
            throw new Error(message || "Expected to be true, but got false");
        }
    },
    
    assertEqual: function (expected, actual) {
        this.assertTrue(
            expected == actual,
            "Expected to equal " + expected + ", but got: " + actual
        );
    }
};

function runTestSuite(testSuiteConstructor) {
    var testSuite = new testSuiteConstructor(assertions);

    for (var testName in testSuite) {
        if (testName.match(/^test/)) {
            testSuite[testName]();
        }
    }
}

module.exports = runTestSuite;
