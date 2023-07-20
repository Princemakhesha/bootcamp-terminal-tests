import assert from "assert";
import greet from "../isWeekday";

describe('The is weekday function', function () {

    it('should return false', function () {
        assert.equal(isWeekday('Saturday'), false);
    });
    it('should return false', function () {
        assert.equal(isWeekday('Sunday'), false);
    });
    it('should return true', function () {
        assert.equal(isWeekday('Monday'), true);
    });
    it('should return true', function () {
        assert.equal(isWeekday('Tuesday'), true);
    });
    it('should return true', function () {
        assert.equal(isWeekday('Wednesday'), true);
    });
    it('should return true', function () {
        assert.equal(isWeekday('Thursday'), true);
    });
    it('should return true', function () {
        assert.equal(isWeekday('Friday'), true);
    });
});

// assert.equal(isWeekday('Saturday'), false);
// assert.equal(isWeekday('Sunday'), false);
// assert.equal(isWeekday('Monday'), true);
// assert.equal(isWeekday('Tuesday'), true);
// assert.equal(isWeekday('Wednesday'), true);
// assert.equal(isWeekday('Thursday'), true);
// assert.equal(isWeekday('Friday'), true);