function pow(a, b){
    return a**b;
}
let a = prompt("a?", '');
let b = prompt("b?", '');

if (b < 1) {
  alert(`Power ${b} is not supported, use a positive integer`);
} else {
  alert( pow(a, b) );
}