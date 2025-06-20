import React, {useState} from "react"
import CategoryFilter from "./CategoryFilter"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"
import {CATEGORIES, TASKS} from "../data"

function App() {
  const [tasks, setTaskList] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const deleteTask = (task) => {
    const updatedTaskList = tasks.filter((t) => t.text !== task.text)
    setTaskList(updatedTaskList)
  }

  const filteredTasks = tasks.filter((t) => {
    if (selectedCategory === "All") {
      return true
    } else {
      return t.category === selectedCategory
    }
  })

  const onTaskFormSubmit = (newTask) => {
    setTaskList([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App
