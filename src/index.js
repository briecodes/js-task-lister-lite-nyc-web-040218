let input = document.getElementById('new-task-description')

document.getElementById('create-task-form').addEventListener('submit', function(e){
    e.preventDefault();
    console.log(input.value.length + ". " + input.value)
    if (input.value.length > 0 && input.value !== " "){
        let newLi = document.createElement('li')
        newLi.innerText = input.value;
        document.getElementById('tasks').appendChild(newLi);
        input.value = "";
        let newDelete = document.createElement('button');
        newDelete.innerText = "X";
        newDelete.setAttribute("class", "deleteMe");
        newLi.appendChild(newDelete);
    }
})

document.addEventListener('click', function(e){
    if (e.target.classList.contains("deleteMe")){
        e.target.parentElement.remove();
    }
});