var poisson = function(x, lambda) {
  var e = 2.718;
  var a = Math.pow(lambda, x);
  var b = Math.pow(e, (lambda * -1));
  var c = factorial(x);
  return parseFloat(((a * b) / c).toFixed(3));
}

var factorial = function(n){
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

var ary = [0, 1, 2, 3, 4, 5, 6, 7, 8]
var result = []

ary.forEach(function(item){
  result.push(poisson(item, 2));
});

console.log(result);
