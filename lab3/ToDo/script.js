document.querySelector('#add__btn').onclick = function(){
    if(document.querySelector('.task__adder input').value.length == 0){
        alert("Please, enter the task name")
    }
    else{
        document.querySelector('#task__list').innerHTML += `
            <div class="task">
                <input type="checkbox" class="checkbox">
                <div class="task__text">
                    ${document.querySelector('.task__adder input').value}
                </div>
                <svg class="del__icon"><use xlink:href="#del__icon"></use></svg>
            </div>
        `;
        document.querySelector('.task__adder input').value = "";
    }
    var current_tasks = document.querySelectorAll(".del__icon");
        for(var i=0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
}

var check = document.querySelector('#task__list');
check.addEventListener('click', function(ev){
    if(ev.target.tagName === 'INPUT'){
        ev.target.parentElement.classList.toggle('checked');
    }
}, false)
