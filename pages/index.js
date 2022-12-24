import { useState } from "react"

const Index = () => {
  const [userInput, setUserInput] = useState("")
  const [todolists, setTodoLists] = useState([])

  const handleChange = (e) => {
    e.preventDefault()

    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodoLists([userInput, ...todolists])
  }

  const handleDelete = (todo) => {
    const updatedArr = todolists.filter(
      (todoItem) => todolists.indexOf(todoItem) != todolists.indexOf(todo)
    )

    setTodoLists(updatedArr)
  }
  return (
    <>
      <h3>Todo LIsts</h3>
      <form>
        <input type="text" onchange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        {todolists.length >= 1
          ? todolists.map((todo, idx) => {
              return (
                <li key={idx}>
                  {todo}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      handleDelete(todo)
                    }}
                  >
                    delete
                  </button>
                </li>
              )
            })
          : "enter a todo list"}
      </ul>
    </>
  )
}

export default Index
