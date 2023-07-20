import assert from "assert";
import greet from "../countRegNumber";

describe('The count Reg Number function', function () {

    it('should return 3', function () {
        assert.equal(regCount, 3);
    });
    it('should return 1', function () {
        // this test will fail - can you fix it?
        assert.equal(regCount, 1);
    });
});


// var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
// assert.equal(regCount, 3);

// var regCount = countRegNumber('CA 182736')
// assert.equal(regCount, 1);
