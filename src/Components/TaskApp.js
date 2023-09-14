import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TaskProvider } from "./TaskContext";
import '../Estilos/TaskAppStyle.css'

// const initalTaski = [{
//   id: uuid(),
//   titulo: 'Tareas Para hoy',
//   listTasks: [{
//     id: 1,
//     titulo: "Philosopher’s Path"
//   }, {
//     id: 2,
//     titulo: "Philosopher’s 1"
//   }, {
//     id: 3,
//     titulo: "Philosopher’s 2"
//   }]
// }, {
//   id: 2,
//   titulo: 'Tareas Para hoy',
//   listTasks: [{
//     id: 1,
//     titulo: "Philosopher’s Path"
//   }, {
//     id: 2,
//     titulo: "Philosopher’s 1"
//   }, {
//     id: 3,
//     titulo: "Philosopher’s 2"
//   }]
// }, {
//   id: 3,
//   titulo: 'Tareas Para hoy',
//   listTasks: [{
//     id: 1,
//     titulo: "Philosopher’s Path"
//   }, {
//     id: 2,
//     titulo: "Philosopher’s 1"
//   }, {
//     id: 3,
//     titulo: "Philosopher’s 2"
//   }]
// }]
let taskId = 0;
const TaskApp = () => {
  const [task, setTask] = useState([]);

  return (
    <div>
      <TaskProvider>
        <h1 className="titulo">Tareas Para hoy</h1>
        <AddTask />
        <TaskList />
      </TaskProvider>

    <div className='div-btn-addtsk'>
    <button 
      style={{background: 'none', border: 'none'}}
      onClick={() => {
        setTask([
        ...task,[
          {id: taskId++}
        ]
      ])
    }}><i class="fas fa-tasks fa-3x" style={{color: '#21fdb3'}} ></i></button>
    </div>
      <TaskProvider>
        
          {task.map(t => (
           <li key={t.id}>
            <AddTask />
            <TaskList />
           </li>
          ))}
        
      </TaskProvider>
    </div>
  );
};

export default TaskApp;
