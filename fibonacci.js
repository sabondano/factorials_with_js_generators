function* fibonacciGenerator() {
  var sequence = [];
  while (true) {
    var length = sequence.length;
    if (length < 2) {
      sequence.push(1);
    } else {
      var nextNumber = sequence[length - 1] + sequenec[length - 2];
      sequence.push(nextNumber);
    }
    yield sequence;
  }
};

fibonacci.next();
fibonacci.next();
