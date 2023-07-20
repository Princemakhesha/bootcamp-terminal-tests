import assert from "assert";
import greet from "../regCheck";

describe('The reg check function', function(){

    it('should return true', function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('should return false', function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });
    it('should return true', function(){
        // this test will fail - can you fix it?
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it('should return false', function(){
        // this test will fail - can you fix it?
        assert.equal(regCheck('5566 L', 'M'), false);
    });
    it('should return true', function(){
        // this test will fail - can you fix it?
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });
    it('should return false', function(){
        // this test will fail - can you fix it?
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });
    it('should return true', function(){
        // this test will fail - can you fix it?
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });
    it('should return false', function(){
        // this test will fail - can you fix it?
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
});

// assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
// assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

// assert.equal(regCheck('5566 L', 'L'), true);
// assert.equal(regCheck('5566 L', 'M'), false);

// assert.equal(regCheck('ERT 123 EC', 'EC'), true);
// assert.equal(regCheck('ERT 123 EC', 'GP'), false);

// assert.equal(regCheck('FGT 123 MP', 'MP'), true);
// assert.equal(regCheck('FGT 123 MM', 'MP'), false);
