import React, { useState } from "react";
import { useTasksDispatch, useTasks } from "./TaskContext";
import '../Estilos/TaskListStyles.css';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <div className='div-main'>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;

  isEditing
    ? (taskContent = (
        <>
          <input
          className='inpt-change'
           value={task.text}
           onChange={e => {
             dispatch({
               type: 'changed',
               task: {
                 ...task,
                 text: e.target.value
               }
             });
           }} 
          />
          <button
             className='btn-check'
             style={{background: 'none', border: 'none', marginLeft:'5px'}}
             onClick={() => setIsEditing(false)}
          >
        <i class="fas fa-check-circle fa-2x" style={{color: "#8cff00"}}></i>
          </button>
        </>
      ))
    : (taskContent = (
        <>

            {task.text}

          <button className="btn-edit" style={{background: 'none', border: 'none', marginLeft:'10px'}} onClick={() => setIsEditing(true)}>
          <i class="fas fa-edit fa-2x" style={{color: '#21fdb3'}}></i>
          </button>
        </>
      ));
  return (
    <label className="lbl-tl">
      <input
      className='input-chbx'
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: 'changed',
            task:{
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <button 
        className='btn-delete'
        style={{background:'none', border:'none', marginLeft: '10px'}}
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        <i class="fas fa-trash-alt fa-2x" style={{color:'#ff0000'}}></i>
      </button>
    </label>
  );
};
