interface CountersProps {
  totalTasks: number,
  finishedTasks: number
}

export function Counters({totalTasks, finishedTasks}:CountersProps) {
  return (
    <div className="counters">
      <p>Tarefas criadas: {totalTasks}</p>
      <p>Concluídas: {finishedTasks} de {totalTasks}</p>
    </div>
  )
}