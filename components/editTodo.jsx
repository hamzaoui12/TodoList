import { useContext } from "react"
import { context } from "../pages/_app"
import Button from "./Button"

const editTodo = () => {
  const { todo, todoStartId } = useContext(context)
  return (
    <div>
      {todo.map((todo) =>
        todo.todos.map((item) => (
          <span id={todoStartId + `${+item.id}`} key={item.id}>
            <div>
              <input type="checkbox"></input>
              <p>{item.title}</p>
            </div>
            <Button text="delete" />
          </span>
        ))
      )}
    </div>
  )
}

export default editTodo
