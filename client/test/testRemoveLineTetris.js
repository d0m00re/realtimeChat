//import { findLineComplete, checkLineComplete} from './../src/componant/hook/checkLineComplete';

const { findLineComplete, deleteAndMooveBottomLine} = require('./../src/componant/hook/checkLineComplete');

var assert = require('assert');

let tab0row = [
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
]

let tab1row = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
]

let tab2row = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
]

let tab3row = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
]

let tab4row = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
]

let tabCheckDelete = [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 0],
    [1, 1, 1, 1],
]



describe('Check line complete', function() {
  describe('findLineComplete', function() {
    it('zero line find', function() {
        let result = findLineComplete(tab0row);
        assert.deepEqual(result, []);
    });

    it('one line find at index 3', function() {
        let result = findLineComplete(tab1row);
        assert.deepEqual(result, [3]);
    });

    it('two lines find at index 2 and 3', function() {
        let result = findLineComplete(tab2row);
        assert.deepEqual(result, [2, 3]);
    });

    it('three lines find at index 1, 2 and 3', function() {
        let result = findLineComplete(tab3row);
        assert.deepEqual(result, [1, 2, 3]);
    });

    it('four lines find at index 0, 1, 2, 3', function() {
        let result = findLineComplete(tab4row);
        assert.deepEqual(result, [0, 1, 2, 3]);
    });


  });

  describe('checkLine complete', function() {
    it('delete one row o the end ad the rest at 0', function() {
        let result = deleteAndMooveBottomLine(tab1row);
        let correct = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        //assert.equal(0, 0)
        assert.deepEqual(result, correct);
    });

    
    it('pyramide of one [1,0,0,0], [1,1,0,0], [1,1,1,0], [1, 1, 1, 1] ---> [0, 0, 0, 0], [1,0,0,0], [1,1,0,0], [1,1,1,0]', function() {
        let result = deleteAndMooveBottomLine(tabCheckDelete);

        assert.equal(0, 0);
        assert.deepEqual(result, tabCheckDelete);
    });
  })
});
