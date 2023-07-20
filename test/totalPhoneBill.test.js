import assert from "assert";
import greet from "../totalPhoneBill";

describe('The total phonebill function', function(){

    it('should return R7.45', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should return R3.40', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it('should return R1.30', function(){
        // this test will fail - can you fix it?
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});

// assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
// assert.equal('R3.40', totalPhoneBill('call, sms'));
// assert.equal('R1.30', totalPhoneBill('sms, sms'));

