import { ReactNode } from "react"
import { useDrop } from "react-dnd"

import { useTasks } from "../store/tasks-context"
import { ListType } from "../types/listType"
import { Task } from "../types/task"
import itemTypes from "../utils/itemTypes"

interface Props {
  children: ReactNode
  listType: ListType
}

export function TaskTarget({ children, listType }: Props) {
  const { handleMoveTask } = useTasks()

  const [, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (item: Task) => {
      if (listType === "wip") {
        handleMoveTask(item.id, false)
      }

      if (listType === "done") {
        handleMoveTask(item.id, true)
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  return (
    <div className="flex-1 flex flex-col gap-4 min-h-[200px]" ref={drop}>
      {children}
    </div>
  )
}
