import { useState } from "react";
import { Task } from "./components/Task";

export function App() {

  const [tasks, setTasks] = useState([
    {id: "1", checked:false, content:"Valeu"},
    {id: "2", checked:true, content:"Por"},
    {id: "3", checked:false, content:"Verificar"}
  ])

  function checkTask(taskId:string) {
    const newTasks = tasks.map( task => {
        if(task.id === taskId) {
          task.checked = !task.checked
        }
        return task
    })
    setTasks(newTasks)
  }

  function deleteTask(taskId:string) {
    const newTasks = tasks.filter( task => {
        return task.id !== taskId
    })
    setTasks(newTasks)
  }

  return (
    <main>
      <h1>To do</h1>
      {tasks.map(task => {
        return (
          <Task 
            id={task.id} 
            checked={task.checked} 
            content={task.content} 
            key={task.id} 
            checkTask={checkTask}
            deleteTask={deleteTask}
          />
        )
      })}
    </main>
  )
}