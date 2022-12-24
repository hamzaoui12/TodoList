import { useContext } from "react"
import { context } from "../pages/_app"
import Button from "../components/Button"
import editLists from "../components/editLists"
import editTodo from "../components/editTodo"
import addTodo from "../components/addTodo"

const index = () => {
  const {
    todoLists,
    idSelected,
    todoListStartId,
    setListCreatePage,
    setListModifyPage,
  } = useContext(context)

  const deletesList = () => {
    removeTodoList(idSelected, todoLists, todoListStartId)
  }

  return (
    <>
      <header>
        <nav className="flex border border-solid border-transparent border-b-gray-300 gap-2 overflow-scroll scrollbar-hide">
          <Button
            className="rounded-xl px-3 py-2"
            text="+"
            onClick={() => setListCreatePage(true)}
          />
        </nav>
      </header>
      <span className="flex border border-solid border-transparent border-b-gray-300 gap-2 overflow-scroll scrollbar-hide">
        <div>
          <Button className="rounded-xl px-3 py-2" text="more" />

          <Button
            className="rounded-xl px-3 py-2 "
            onClick={() => setListModifyPage(true)}
            text="rename"
          />
          <Button
            className="rounded-xl px-3 py-2"
            onClick={() => deleteList()}
            text="delete"
          />
        </div>
      </span>
    </>
  )
}
export default index
