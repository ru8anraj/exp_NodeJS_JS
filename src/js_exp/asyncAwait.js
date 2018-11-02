var resolveAfter2Seconds = function() {
  console.log("starting slow promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(20);
      console.log("slow promise is done");
    }, 2000);
  });
};

var resolveAfter1Second = function() {
  console.log("starting fast promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(10);
      console.log("fast promise is done");
    }, 1000);
  });
};

var sequentialStart = async function() {
  console.log('==SEQUENTIAL START==');
  const slow = await resolveAfter2Seconds(); // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
  const fast = await resolveAfter1Second();
  console.log('1 - > ', slow);
  console.log('2 - > ', fast);
}

var promiseAll = function() {
  console.log('------------inside promise all----------------');
  Promise.all([resolveAfter1Second(), resolveAfter2Seconds()])
          .then(([slow, fast]) => {
            console.log('slow, fast - > ', slow, fast);
          });
}

// sequentialStart(); 



promiseAll();