function min(a, b){
    let num;
    num = (a > b) ? b : a;
    return num
}

let a = +prompt();
let b = +prompt();

alert(min(a,b));

