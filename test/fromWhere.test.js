import assert from "assert";
import greet from "../fromWhere";

describe('The from where function', function(){

    it('should return Bellville', function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    });
    it('should return Paarl', function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });
    it('should return Cape Town', function(){
        // this test will fail - can you fix it?
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });
    it('should return Some other place!', function(){
        // this test will fail - can you fix it?
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
});

// assert.equal(fromWhere('CY 567489'), 'Bellville'); 
// assert.equal(fromWhere('CJ 343502'), 'Paarl');
// assert.equal(fromWhere('CA 987504'), 'Cape Town');
// assert.equal(fromWhere('ZN 568593'), 'Some other place!');

