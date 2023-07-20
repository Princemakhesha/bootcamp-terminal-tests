// import assert from "assert";
// import greet from "../greet";

// describe('The greet function', function(){

//     it('should greet Andrew correctly', function(){
//         assert.equal('Hello, Andre', greet('Andrew'));
//     });
//     it('should greet Karen correctly', function(){
//         // this test will fail - can you fix it?
//         assert.equal('Hello, Karen', greet('André'));
//     });
// });

// assert.equal(isFromBellville('CY 123'), true);
// assert.equal(isFromBellville('CJ 123'), false);

import assert from "assert";
import greet from "../isFromBellville";

describe('The is from Bellville function', function(){

    it('should return true', function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('should return false', function(){
        // this test will fail - can you fix it?
        assert.equal(isFromBellville('CJ 123'), false);
    });
});
