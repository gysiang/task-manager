import { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div>
        <h1>Task Manager</h1>
        <AddTaskForm 
          taskName={taskName} 
          setTaskName={setTaskName} 
          taskDescription={taskDescription} 
          setTaskDescription={setTaskDescription}
          tasks={tasks}
          setTasks={setTasks}
        />
        <TaskList 
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </>
  )
}

export default App
