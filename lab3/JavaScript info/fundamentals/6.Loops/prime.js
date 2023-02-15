let num = prompt('Enter a number');

alert(`Prime numbers from 2 to ${num}`);

outer: 
for(let i = 2; i <= num; i++){
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            continue outer;
        }
    }
    alert(i);
}