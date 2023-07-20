import assert from "assert";
import greet from "../findItemsOver20";

describe('The find items over20 function', function () {

    it('should return itemList', function () {
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });
    it('should return itemList2', function () {
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });
    it('should return itemList3', function () {
        // this test will fail - can you fix it?
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });
});

// assert.deepEqual(results, findItemsOver20(itemList));
// assert.deepEqual(results2, findItemsOver20(itemList2));
// assert.deepEqual(results3, findItemsOver20(itemList3));

// console.log('findItemsOver20 passed!')