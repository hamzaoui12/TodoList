import increaseID from "./increaseId"

const addList = (title, setLists, setCurrentId, currentId) => {
  increaseID(currentId, setCurrentId)
  setLists((List) => [
    ...List,
    {
      id: currentId,
      title: String(title),
      todos: [{ id: currentId, title: String(title) }],
    },
  ])
}

export default addList
