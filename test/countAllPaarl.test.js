import assert from "assert";
import greet from "../countAllFromPaarl";

describe('The count all from Paarl function', function () {

    it('should return [CL 124, CL 345, CL 341]', function () {
        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
    });
    it('should return There are 2 Paarl reg numbers.', function () {
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
    });
    it('should return [1]', function () {
        // this test will fail - can you fix it?
        assert.equal('CJ 67890', regNumbersForPaarl[1]);
    });
});

// var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
// var regNumbersForPaarl = allPaarl(regNumbers);

// assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
// assert.equal('CJ 678 543', regNumbersForPaarl[0]);
// assert.equal('CJ 67890', regNumbersForPaarl[1]);
