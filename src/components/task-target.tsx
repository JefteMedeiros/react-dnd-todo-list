import { useDrop } from "react-dnd"

import itemTypes from "../utils/itemTypes"

// interface Props {}

export function TaskTarget() {
  const [{ isOver }, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (item) => console.log("dropped ", item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  const styles = isOver ? "bg-yellow-900" : "bg-purple-500"

  return (
    <div ref={drop} className={styles + " w-full p-2 rounded-md min-h-[400px]"}>
      Drop here
    </div>
  )
}
