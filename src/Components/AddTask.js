import React, { useState } from "react";
import { useTasksDispatch } from "./TaskContext";
import "../Estilos/AddtaskStyle.css";

let nextId = 3;
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  const [isClick, setIsClick] = useState(false);

  return (
    <div>
      {isClick === false ? (
        <div className="div-plus">
          <button
            style={{ background: "none", border: "none" }}
            onClick={() => setIsClick(true)}
          >
            <i
              class="fas fa-plus fa-3x "
              style={{ color: "#21fdb3" }}
            ></i>
          </button>
        </div>
      ) : (
        <div className="div-top">
          <input
            className="inpt-add"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="btn-add"
            style={{
              background: "none",
              border: "none",
              marginLeft: "5px",
            }}
            onClick={() => {
              setText("");
              dispatch({
                type: "added",
                id: nextId++,
                text: text,
              });
            }}
          >
            <i
              class="fas fa-check-circle fa-3x"
              style={{ color: "#8cff00" }}
            ></i>
          </button>
          <button
            className="btn-addtsk"
            onClick={() => setIsClick(false)}
          >
            READY
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTask;
