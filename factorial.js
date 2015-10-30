function* factorialGenerator() {
    var count = 1;
      var product = 1;
        while (true) {
                yield product = count++ * product;
                  }
}

var factorial = factorialGenerator();

factorial.next().value;
factorial.next().value;
