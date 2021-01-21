const assert = require('assert');

const {checkAndPush, checkValidPushTetri, mergeTetriOnMap, getAllFullLine, deleteFullLine} = require('./../src/logic/tetriLogic');

const tetriBlue = [
    [
        [1,0,0],
        [1,1,1],
        [0,0,0],
    ],
    [
        [0,1,1],
        [0,1,0],
        [0,1,0],
    ],
    [
        [0,0,0],
        [1,1,1],
        [0,0,1],
    ],
    [
        [0,1,0],
        [0,1,0],
        [1,1,0],
    ],
  ]

describe('Logic',function() {
    describe('checkValidPushTetri', function(){
        it('check valid {x: 0, y : 0', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 0, y : 0});
            assert.equal(ret, true);
        }),
        it('check valid {x: -10, y : -10', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : -10, y : -10});
            assert.equal(ret, false);
        })
        it('check valid {x: 100, y : 100}', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 100, y : 100});
            assert.equal(ret, false);
        })
        it('check invalid pos contact', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            tab[19]=Array(10).fill(1);

            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 5, y : 18});
            assert.equal(ret, false);
        })
        it('check valid pos top of the map', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            tab[19]=Array(10).fill(1);

            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 5, y : 0});
            assert.equal(ret, true);
        })
        it('check valid pos middle of the map', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            tab[19]=Array(10).fill(1);

            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 5, y : 10});
            assert.equal(ret, true);
        })
    })
    describe('checkAndPush--', function() {
        it('check invalid complety outsite', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkAndPush(tab, tetriBlue[0], {x : -10, y : -10});
            assert.equal(ret, false);
        })
        it('check invalid complety outsite', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkAndPush(tab, tetriBlue[0], {x : 10, y : 10});
            assert.equal(ret, false);
        })
        it('check good position {x : 7, y: 10}', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkAndPush(tab, tetriBlue[0], {x : 7, y : 10});
            assert.equal(ret, true);
        })
    });
    describe('get all line fullLine', function() {
        it('check complete one line', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            tab[19]=Array(10).fill(1);
        
            let ret = getAllFullLine(tab);
            assert.deepEqual(ret, [19]);
        })
        it('check complete zero line', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = getAllFullLine(tab);
            assert.deepEqual(ret, []);
        })
        it('check complete one line', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            tab[19]=Array(10).fill(1);
            tab[18]=Array(10).fill(1);
        
            let ret = getAllFullLine(tab);
            assert.deepEqual(ret, [18, 19]);
        })
    });
    describe('delete full line', function() {
        it('delete full line', function() {
            
        })
    })
    /*
    describe('mergeTetriOnMap', function() {

    });
    describe('checkValidPushTetri', function() {

    });
    */
 
    
})