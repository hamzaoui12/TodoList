import { useContext } from "react"
import { context } from "../pages/_app"
import Button from "./Button"

const editLists = () => {
  const { Lists, ListStartId, setIdSelected } = useContext(context)
  return (
    <div>
      {Lists.map((item) => (
        <Button
          id={ListStartId + `${+item.id}`}
          key={item.id}
          onClick={() => setIdSelected(item.id)}
          text={item.title}
        />
      ))}
    </div>
  )
}

export default editLists
