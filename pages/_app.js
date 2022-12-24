import "../styles/globals.css"
import { useState, createContext } from "react"
import addList from "../components/addList"
import modifyList from "../components/modifyList"

const context = createContext()

const App = ({ Component, pageProps }) => {
  const initialValues = {
    title: "",
  }

  const [ListCreatePage, setListCreatePage] = useState(false)
  const [ListModifyPage, setListModifyPage] = useState(false)
  const [idSelected, setIdSelected] = useState(0)
  const [currentId, setCurrentId] = useState(-1)
  const [todoLists, setTodoLists] = useState([])

  const todoListModifySubmit = (values, { resetForm }) => {
    modifyList(idSelected, String(values.title), todoLists)
    setTodoListModifyPage(false)
    resetForm({ values: "" })
  }

  const todoListCreateSubmit = (values, { resetForm }) => {
    addList(String(values.title), setTodoLists, setCurrentId, currentId)
    setTodoListCreatePage(false)
    resetForm({ values: "" })
  }

  return (
    <context.Provider
      value={{
        setTodoLists,
        todoListCreateSubmit,
        setCurrentId,
        setIdSelected,
        todoListModifySubmit,
        ListCreatePage,
        setListCreatePage,
        setListModifyPage,
        initialValues,
        ListModifyPage,
      }}
    >
      <Component {...pageProps} />
    </context.Provider>
  )
}

export default App
export { context }
