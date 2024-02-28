import { useDrag } from "react-dnd"

import { Task } from "../types/task"
import itemTypes from "../utils/itemTypes"

interface Props {
  task: Task
}

export function TaskCard({ task }: Props) {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: itemTypes.CARD,
      id: task.id,
    },
    type: itemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  isDragging ? "opacity-0" : "opacity-100"

  return (
    <div ref={drag} className={`bg-white p-2 rounded-md ${isDragging}`}>
      <h2 className="font-semibold">{task.title}</h2>
      <span>{task.description}</span>
    </div>
  )
}
