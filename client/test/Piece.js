const {Piece} = require('./../src/utils/Piece');
const {tetriminos} = require('./../src/utils/cTetriminos');
const assert = require('assert');

describe('Piece', function() {
    describe('rotation : findLineComplete', function() {
      it('rotation : get', function() {
          let piece = new Piece();

          piece.piece = tetriminos[0];
          assert.deepEqual(piece.piece, tetriminos[0].tetri[0]);
      });
      
      it('rotation : get with 2 rotations', function() {
        let piece = new Piece();

        piece.piece = tetriminos[0];
        piece.rotation();
        piece.rotation();
        assert.deepEqual(piece.piece, tetriminos[0].tetri[2]);
    });

    it('rotation: get with 8 rotations', function() {
      let piece = new Piece();

      piece.piece = tetriminos[0];

      for(let i =0; i < 8; i++)
        piece.rotation();
      assert.deepEqual(piece.piece, tetriminos[0].tetri[0]);
  });

  it('color: check cyan color', function() {
    let piece = new Piece();

    piece.piece = tetriminos[0];

    assert.deepEqual(piece.color, tetriminos[0].color);
});
  
    })
});