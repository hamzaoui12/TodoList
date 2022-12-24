const modifyList = (id, newTitle, list) => {
  console.log(newTitle)
  console.log(
    list
      .filter((list) => Number(list.id) === id)
      .map((list) => (list.title = newTitle))
  )
}

export default modifyList
