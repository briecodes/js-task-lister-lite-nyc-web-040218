let input = document.getElementById('new-task-description');
let priority = document.getElementById('priority');

document.getElementById('create-task-form').addEventListener('submit', function(e){
    e.preventDefault();
    if (input.value.length > 0 && input.value !== " "){
        let newLi = document.createElement('li')
        newLi.innerText = input.value;
        document.getElementById('tasks').appendChild(newLi);
        input.value = "";
        let newDelete = document.createElement('button');
        newDelete.innerText = "X";
        newDelete.setAttribute("class", "deleteMe");
        newLi.appendChild(newDelete);
        if (priority.value){
            newLi.setAttribute("class", priority.value);
        }
        // ROGER’S CODE
        // button.setAttribute("onclick","deleteFunction(this)")
        // SHUN’S CODE
        // const button = document.createElement('button');
        // button.addEventListener("click", () => {
        //     li.remove();
        // });
    }
})

// function deleteFunction(sender){
//     sender.parentNode.remove()
// }

document.addEventListener('click', function(e){
    if (e.target.classList.contains("deleteMe")){
        e.target.parentElement.remove();
    }
});