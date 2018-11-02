// callbacks --- >

function squaring(x, callback) {
  if(x===0) {
    return 0;
  } else {
    return callback(x);
  }
}

var cb = function(x) {
  return Math.pow(x, 2);
};

var res = squaring(5, cb);

console.log('1 - > ');
console.log('2 - > ', res);
console.log('3 - > ');




// promises --- >

var squaring = function(x) {
  return new Promise((success,noSuccess) => {
    try{
      let sq = Math.pow(x, 2);
      success(sq);
    } catch(e) {
      noSuccess(e);
    }
  })
};

var resp = squaring(3)
            .then(t => console.log('res from promises - > ', t))
            .catch(e => console.error('err from promises - > ', e));