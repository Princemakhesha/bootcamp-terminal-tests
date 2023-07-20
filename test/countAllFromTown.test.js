import assert from "assert";
import greet from "../countAllFromTown";

describe('The count all from town function', function () {

    it('should return [CL 124, CL 345, CL 341]', function () {
        assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])
    });
    it('should return [CJ 456]', function () {
        assert.deepEqual(fromStellies, ['CJ 456']);
    });
    it('should return []', function () {
        // this test will fail - can you fix it?
        assert.deepEqual(fromKuilsriver, []);
    });
});

// var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
// assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])

// var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ');
// assert.deepEqual(fromStellies, ['CJ 456']);


// var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');
// assert.deepEqual(fromKuilsriver, []);