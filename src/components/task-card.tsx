import { Task } from "../types/task"

interface Props {
  task: Task
}

export function TaskCard({ task }: Props) {
  return (
    <div className="bg-white p-2 rounded-md">
      <h2 className="font-semibold">{task.title}</h2>
      <span>{task.description}</span>
    </div>
  )
}
