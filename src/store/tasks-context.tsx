import { createContext, ReactNode, useContext, useState } from "react"

import { Task } from "../types/task"

interface TasksContext {
  tasks: Task[]
  handleMoveTask: (id: string, isDone: boolean) => void
}

interface Props {
  children: ReactNode
}

export const tasksContext = createContext({} as TasksContext)

export function TasksProvider({ children }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
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

  const handleMoveTask = (id: string, isDone: boolean) => {
    const taskIndex = tasks.findIndex((task) => task.id === id)
    const newTasks = [...tasks]
    newTasks[taskIndex].isDone = isDone
    setTasks(newTasks)
  }

  return (
    <tasksContext.Provider value={{ tasks, handleMoveTask }}>
      {children}
    </tasksContext.Provider>
  )
}

export function useTasks() {
  const { handleMoveTask, tasks } = useContext(tasksContext)

  return { handleMoveTask, tasks }
}
