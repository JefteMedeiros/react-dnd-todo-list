import { useTasks } from "../store/tasks-context"

import { TaskCard } from "./task-card"

export function WipTasks() {
  const { tasks } = useTasks()

  return (
    <div className="space-y-4 bg-red-400 min-w-80 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-white">W.I.P tasks</h2>
      <div className="border-white rounded-full border-[1px]" />
      <div className="flex flex-col gap-4">
        {tasks
          .filter((task) => !task.isDone)
          .map((doneTask) => {
            return <TaskCard task={doneTask} key={doneTask.id} />
          })}
      </div>
    </div>
  )
}
