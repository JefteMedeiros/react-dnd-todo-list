import { useState } from "react"

import { DndWrapper } from "./components/dnd-wrapper"
import { DoneTasks } from "./components/done-tasks"
import { WipTasks } from "./components/wip-taks"
import { Task } from "./types/task"

function App() {
  const [tasks] = useState<Task[]>([
    {
      title: "Task 1",
      description: "Description 1",
      id: "1",
      isDone: true,
    },
    {
      title: "Task 2",
      description: "Description 2",
      id: "2",
      isDone: false,
    },
    {
      title: "Task 3",
      description: "Description 3",
      id: "3",
      isDone: false,
    },
  ])

  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-zinc-900 items-center justify-center">
      <DndWrapper>
        <div className="max-w-fit">
          <h1 className="text-left text-white text-3xl font-semibold mb-4">
            React DnD testing app
          </h1>
          <div className="flex gap-4 justify-center">
            <WipTasks tasks={tasks} />
            <DoneTasks tasks={tasks} />
          </div>
        </div>
      </DndWrapper>
    </div>
  )
}

export default App
