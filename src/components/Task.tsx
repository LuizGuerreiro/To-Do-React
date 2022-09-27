import { CheckCircle, Circle, Trash } from 'phosphor-react'

interface TaskProps {
  id: string,
  checked: boolean,
  content: string,
  checkTask: (id: string) => void,
  deleteTask: (id: string) => void
}

export function Task({ id, checked, content, checkTask, deleteTask}:TaskProps) {
  const check = (checked ? <CheckCircle/> : <Circle/>)

  function handleCheckTask() {
    checkTask(id)
  }

  function handleDeleteTask() {
    deleteTask(id)
  }

  return (
    <>
      <button type='button' onClick={handleCheckTask}>
        {check}
      </button>
      <p>{content}</p>
      <button type='button' onClick={handleDeleteTask}>
        <Trash/>
      </button>
    </>
  )
}