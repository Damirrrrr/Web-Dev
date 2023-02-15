let userLogin = prompt("Who's there?");

if(userLogin == "Admin"){
    let pswrd = prompt("Password?");
    if(pswrd == "TheMaster"){
        alert("Welcome");
    }else if(pswrd == '' || pswrd == null){
        alert("Cancelled");
    }else{
        alert("Wrong password");
    }
}else if(userLogin == '' || userLogin == null){
    alert("Canceled")
}else{
    alert("I don't know you")
}