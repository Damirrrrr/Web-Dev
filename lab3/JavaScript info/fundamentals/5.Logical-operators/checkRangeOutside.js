
let age = prompt("Enter your age");

//first variant with NOT!
if(!(age >= 14 && age <= 90)){
    alert('Your age is not between 14 and 90');
}

//second variant without NOT!
if(age < 14 && age > 90){
    alert('Your age is not between 14 and 90');
}