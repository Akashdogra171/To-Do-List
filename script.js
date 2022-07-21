'use strict'

window.addEventListener('load',()=>{
    const form  = document.querySelector('#new-task-form');
    const input =  document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks')
    console.log(form,input,list_el)

    form.addEventListener('submit',function(e){
        e.preventDefault();

        const task = input.value;
        if(!task){
            alert("Please add a Task");
            return;
        }
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_el_content = document.createElement("div");
        task_el_content.classList.add('content');
        


        task_el.appendChild(task_el_content);

        const task_input_el =document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type='text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly','readonly');


        task_el_content.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('action');


        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit')
        task_edit_el.textContent = 'EDIT';


        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete')
        task_delete_el.textContent = 'DELETE';


        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);

        task_el.appendChild(task_action_el);

        list_el.appendChild(task_el)


        input.value =""

        task_edit_el.addEventListener('click',function(){

            if(task_edit_el.textContent.toLowerCase() === 'edit'){
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.textContent = "SAVE";
            }else{
                task_input_el.setAttribute('readonly','readonly');
                task_edit_el.textContent = "EDIT";
            }

        })

        task_delete_el.addEventListener('click',function(){
            list_el.removeChild(task_el);
        })
    })

})