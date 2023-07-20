import assert from "assert";
import greet from "../transportFee";

describe('The transport fee function', function(){

    it('should return R20', function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return R10', function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should return free', function(){
        // this test will fail - can you fix it?
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});

// assert.equal(transportFee('morning'), 'R20');

// assert.equal(transportFee('afternoon'), 'R10');

// assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
