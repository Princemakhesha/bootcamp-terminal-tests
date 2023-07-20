import assert from "assert";
import greet from "../findItemsOver";

describe('The find items over function', function () {

    it('should return itemList, 20', function () {
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });
    it('should return [CJ 456]', function () {
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });
    it('should return []', function () {
        // this test will fail - can you fix it?
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });
});

// assert.deepEqual(results, findItemsOver(itemList, 20));
// assert.deepEqual(results2, findItemsOver(itemList2, 20));
// assert.deepEqual(results3, findItemsOver(itemList3, 20));

// console.log('findItemsOver passed!');