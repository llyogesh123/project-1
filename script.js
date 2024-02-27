function addTask() {
    var task = document.getElementById('task-input').value;

    if(task.trim()!=''){

    var taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskItem.className = 'border p-2 m-2 shadow-lg rounded-lg flex flex-row justify-between';
    var deleteButton=document.createElement('button');
    deleteButton.textContent='Delete';
    deleteButton.className='bg-red-500 text-white px-4 py-2 rounded-full';
    taskItem.appendChild(deleteButton);
    var task=document.getElementById('task-input').value;
    var totalTask=document.getElementById('total-task')
    var taskCount=document.getElementById('task-list').childElementCount
    totalTask.textContent=taskCount+1

    //add click event to the delete button
    deleteButton.addEventListener('click',function(){
        taskItem.remove();
        var taskCount=document.getElementById('task-list').childElementCount
        totalTask.textContent=taskCount
    })
    
    document.getElementById('task-list').appendChild(taskItem);
    document.getElementById("task-input").value="";
}
}

function deleteTask(){
    document.getElementById('task-list').innerHTML='';
    document.getElementById('total-task').innerHTML='';
}


