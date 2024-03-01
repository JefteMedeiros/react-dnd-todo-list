import { DndWrapper } from "./components/dnd-wrapper"
import { DoneTasks } from "./components/done-tasks"
import { WipTasks } from "./components/wip-taks"
import { TasksProvider } from "./store/tasks-context"

function App() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-zinc-900 items-center justify-center">
      <DndWrapper>
        <TasksProvider>
          <div className="max-w-fit">
            <h1 className="text-left text-white text-3xl font-semibold mb-4">
              React DnD testing app
            </h1>
            <div className="flex gap-4 justify-center">
              <WipTasks />
              <DoneTasks />
            </div>
          </div>
        </TasksProvider>
      </DndWrapper>
    </div>
  )
}

export default App
