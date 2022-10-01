import { CheckCircle, Circle, Trash } from 'phosphor-react'

import styles from '../../public/styles/Task.module.css'

interface TaskProps {
  id: string,
  checked: boolean,
  content: string,
  checkTask: (id: string) => void,
  deleteTask: (id: string) => void
}

export function Task({ id, checked, content, checkTask, deleteTask}:TaskProps) {
  const check = (checked ? 
                  <CheckCircle size={24} color="#5E60CE" weight="fill" /> : 
                  <Circle size={24} color="#4EA8DE" />
                )

  function handleCheckTask() {
    checkTask(id)
  }

  function handleDeleteTask() {
    deleteTask(id)
  }

  return (
    <div id={id} className={checked ? `${styles.checked}` : `${styles.task}`}>
      <button type='button' onClick={handleCheckTask}>
        {check}
      </button>
      <p>{content}</p>
      <button type='button' onClick={handleDeleteTask}>
        <Trash size={24} color="#808080"/>
      </button>
    </div>
  )
}