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
                  <CheckCircle className={styles.checkCircle} size={24} weight="fill"/> : 
                  <Circle className={styles.circle} size={24}/>
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
        <Trash className={styles.trash} size={24}/>
      </button>
    </div>
  )
}