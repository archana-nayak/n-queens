/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var rooksBoard = new Board({n: n});
  var solution; //fixme
  var recursive = function(row) {
    row = row || 0;
    if (row === n) {
      return rooksBoard.rows();
    }
    for (var i = 0; i < n; i++) {
      rooksBoard.togglePiece(row, i);
      if (!rooksBoard.hasAnyRooksConflicts()) {
        return recursive (row + 1);
      }
      rooksBoard.togglePiece( row, i);
    }
  };
  solution = recursive();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var rooksBoard = new Board({n: n});
  var solutionCount = 0; //fixme
  var recursive = function(row) {
    row = row || 0;
    if (n === row) {
      solutionCount++;
    } else {
      for (var i = 0; i < n; i++) {
        rooksBoard.togglePiece(row, i);
        if (!rooksBoard.hasColConflictAt(i)) {
          recursive (row + 1);
        }
        rooksBoard.togglePiece( row, i);
      }
    }
  }; //fixme
  recursive();
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
window.findNQueensSolutions = function(n) {
  
};
// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var queensBoard = new Board({n: n});
  var solutionCount = 0; 
  if (n === 0 || n === 1) {
    return 1;
  } if (n === 2 || n === 3) {
    return 0;
  } 
  var recursive = function(row) {
    row = row || 0;
    if (n === row) {
      solutionCount++;
    } else {
      for (var i = 0; i < n; i++) {
        queensBoard.togglePiece(row, i);
        if (!queensBoard.hasAnyQueensConflicts(i)) {
          recursive (row + 1);
        } 
        queensBoard.togglePiece( row, i);
      }
    }
  };
  recursive();
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
