import React, {useState} from "react"

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskName, setTaskName] = useState("")
  const [categoryType, setCategoryType] = useState("Code")

  const addedTask = {text: taskName, category: categoryType}

  const handleChangeName = (event) => {
    setTaskName(event.target.value)
  }

  const handleChangeCategory = (event) => {
    setCategoryType(event.target.value)
  }

  const handleAddNewTask = (event) => {
    event.preventDefault()
    onTaskFormSubmit(addedTask)
  }

  return (
    <form className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskName}
          onChange={handleChangeName}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={categoryType}
          onChange={handleChangeCategory}
        >
          {categories.map((category) => {
            if (category !== "All") {
              return <option key={category}>{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={handleAddNewTask} />
    </form>
  )
}

export default NewTaskForm
