import assert from "assert";
import greet from "../yearAgo";

describe('The years ago function', function(){

    it('should return yearsAgo(1976)', function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });
    it('should return yearsAgo(2000)', function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});

// assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
// assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
