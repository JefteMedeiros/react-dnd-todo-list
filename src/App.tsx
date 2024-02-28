import { DndWrapper } from "./components/dnd-wrapper"
import { DoneTasks } from "./components/done-tasks"
import { WipTasks } from "./components/wip-taks"

function App() {
  return (
    <div className="w-screen h-screen flex bg-zinc-900 items-center justify-center">
      <DndWrapper>
        <div className="flex gap-4 justify-center">
          <WipTasks />
          <DoneTasks />
        </div>
      </DndWrapper>
    </div>
  )
}

export default App
