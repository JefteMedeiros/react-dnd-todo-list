import { useTasks } from "../store/tasks-context"
import { ListType } from "../types/listType"

import { TaskCard } from "./task-card"
import { TaskTarget } from "./task-target"

interface Props {
  listType: ListType
  title: string
  bgColor: string
}

export function TaskList({ title, bgColor, listType }: Props) {
  const { tasks } = useTasks()

  const isTaskDone = listType === "wip" ? false : true

  return (
    <div
      className={
        "flex flex-col gap-4 min-w-80 p-4 rounded-md shadow-md " + bgColor
      }
    >
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="border-white rounded-full border-[1px]" />
      <TaskTarget listType={listType}>
        {tasks
          .filter((task) => task.isDone === isTaskDone)
          .map((doneTask) => {
            return <TaskCard task={doneTask} key={doneTask.id} />
          })}
      </TaskTarget>
    </div>
  )
}
