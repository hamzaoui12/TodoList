const modifytodo = (id, newTitle, todo) => {
  console.log(newTitle)
  console.log(
    todo
      .filter((todo) => Number(todo.id) === id)
      .map((todo) => (todo.title = newTitle))
  )
}

export default modifytodo
