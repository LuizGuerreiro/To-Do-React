import { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "./Task"

export function TaskList() {
  const [tasks, setTasks] = useState([
    {id: "1", checked:false, content:"Valeu"},
    {id: "2", checked:true, content:"Por"},
    {id: "3", checked:false, content:"Verificar"}
  ])

  const [newTaskContent, setNewTaskContent] = useState("")

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value)
  }

  function handleSubmitTask(event: FormEvent) {
    event.preventDefault()
    const index = tasks.length - 1
    const newId = parseInt(tasks[index].id) + 1
    setTasks([...tasks, {
      id: `${newId}`,
      checked: false,
      content: newTaskContent
    }])
    setNewTaskContent("")
  }

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
    <div className="taskList">
      <form onSubmit={handleSubmitTask}>
        <input 
          type="text" 
          name="task"
          onChange={handleNewTask}
          value={newTaskContent}
          required
        />
        <button type="submit">
          Nova tarefa
        </button>
      </form>
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
    </div>
  )
}