# Poisson distribution

What is [Poisson Distribution](https://en.wikipedia.org/wiki/Poisson_distribution)?

## Code

```javascript

var poisson = function(x, lambda) {
  var e = 2.718;
  var a = Math.pow(lambda, x);
  var b = Math.pow(e, (lambda * -1));
  var c = factorial(x);
  return parseFloat(((a * b) / c).toFixed(3));
}

// Yeah, you'll need factorial to do this
var factorial = function(n){
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```
