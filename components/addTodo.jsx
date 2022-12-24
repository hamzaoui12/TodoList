import increaseID from "./increaseId"

const addTodo = (title, todo, currentId, setCurrentId) => {
  increaseID(currentId, setCurrentId, todo)

  todoLists
    .find((todo) => todo.id === id)
    .todo.psch({ id: currentId, title: String(title), is_check: false })
}

export default addTodo
