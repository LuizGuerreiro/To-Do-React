import styles from '../../public/styles/Counters.module.css'

interface CountersProps {
  totalTasks: number,
  finishedTasks: number
}

export function Counters({totalTasks, finishedTasks}:CountersProps) {
  const done = (totalTasks === 0 ? "0" : `${finishedTasks} de ${totalTasks}`)
  return (
    <div className={styles.counters}>
      <p>Tarefas criadas: <span>{totalTasks}</span></p>
      <p>Concluídas: <span>{done}</span></p>
    </div>
  )
}