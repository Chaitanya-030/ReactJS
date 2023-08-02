import './TodoList.css';
import { useState } from 'react'

function App() {
  
  const [TodoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // due to assignment of the id, it will not delete the all the similar entries together.
    const task = {
      id : TodoList.length === 0 ? 1 : TodoList[TodoList.length - 1].id + 1,
      taskName : newTask
    }
    setTodoList([...TodoList, task]);
  };

  const deleteTask = (id) => {
    const newTodoList = TodoList.filter((task) => {
      if(task.id === id){
        return false;
      }
      else{
        return true;
      }
    });

    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input placeholder = "Enter your task" onChange = {handleChange} />
        <button onClick={addTask}> Add Task </button>
      </div>

      <div className="list">
        {TodoList.map((task) => {
          return (
            <div className="task"> 
              <h1>{task.taskName}</h1>
              <button onClick = {() => deleteTask(task.id)}> X </button>
            </div>
          );

        })}
      </div>
    </div>
  );

 
}


export default App;
