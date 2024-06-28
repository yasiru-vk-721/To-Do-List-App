import React, { useState } from 'react'
import TodoIcon from "../assets/todo_icon.png"
import TodoItems from './TodoItems'

const Todo = () => {

  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);

  let newTask = [];

  const handleInputChange= (event) =>{
    setTaskName(event.target.value === "" ?  null : event.target.value);

  }

  const handleButtonClick = () => {
    const currentDate= new Date().toLocaleString();
    newTask = {
        taskName: taskName,
        dateTime: currentDate
    };
    console.log(newTask);
    setTaskList((prevTasks) => [...prevTasks, newTask])
    setTaskName('')
  }



  return (
    <div className='bg-stone-900 py-4 min-h-screen flex items-center justify-center'>
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl'>
            <div className='flex items-center gap-2'>
                <img className='w-8' src={TodoIcon} alt="todo-icon" />
                <h1 className='text-black text-2xl font-semibold'>To-Do List</h1>
                <h2 className='ml-16 pl-4'>Let's make and plan..</h2>
            </div>
            <div className='flex items-center my-7 bg-gray-300 rounded-full'>
                <input className='bg-transparent boreder-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task..' value={taskName} onChange={handleInputChange}/>
                <button className='border-none rounded-full bg-gradient-to-r from-blue-500 via-pink-600 to-cyan-800 w-32 h-14 text-white text-lgfont-medium cursor-pointer' onClick={handleButtonClick}>Add +</button>
            </div>

            <div>
                <ul>
                   {taskList.map((task, index) => (
                    <li key={index}>
                        <TodoItems props={task.taskName}/>
                    </li>
                   ))} 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Todo