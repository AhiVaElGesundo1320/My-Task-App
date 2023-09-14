import TaskApp from "./Components/TaskApp";
import './App.css'
// import AddTask from "./Components/AddTask";
// import TaskList from "./Components/TaskList";
// import { TaskProvider } from "./Components/TaskContext";

function App() {
  return (
    <div className="App" >
      
      <TaskApp />
      {/* <TaskProvider>
        <h1>Mis Tareas</h1>
        <AddTask />
        <TaskList />
      </TaskProvider> */}
    </div>
  );
}

export default App;
