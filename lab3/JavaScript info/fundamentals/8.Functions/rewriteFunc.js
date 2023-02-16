//variant with ?
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

//variant with ||
function checkAge(age){
    return (age > 18) || confirm("Did parents allow you?");
}