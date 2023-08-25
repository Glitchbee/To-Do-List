// Select the required element using query selector.
const inputVal = document.querySelector('#event-list');
const lstTasks = document.querySelector('.lst-container');

//Adding task into todo list.
function addTask() {
    if (inputVal.value === '') {
        alert('Type some events to add into To-Do list!')
    }
    else {
        let newList = document.createElement('li');
        newList.innerHTML = inputVal.value;
        lstTasks.appendChild(newList);

        // Set a delete option to remove the task.
        const delTask = document.createElement('img');
        delTask.src = './images/trash-2.svg';
        newList.appendChild(delTask);
    }
    inputVal.value = '';
    saveTask()
}

function keyPress(event){
    if(event.key === 'Enter'){
        addTask()
    }
}

// The below event code performs the click operation.
lstTasks.addEventListener("click", function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
        saveTask()
    }
    else if(event.target.tagName === 'IMG'){
        event.target.parentElement.remove();
        saveTask()
    }
},false);


// Moving the saved task to local storage for future use.
function saveTask(){
    localStorage.setItem('data',lstTasks.innerHTML);
}

function displayTask(){
    lstTasks.innerHTML = localStorage.getItem('data');
}

displayTask()



