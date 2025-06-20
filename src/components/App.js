import React, {useState} from "react"
import CategoryFilter from "./CategoryFilter"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"

import {CATEGORIES, TASKS} from "../data"
console.log("Here's the data you're working with")
console.log({CATEGORIES, TASKS})

function App() {
  const [tasks, setTaskList] = useState(TASKS)

  const deleteTask = (task) => {
    const updatedTaskList = tasks.filter((t) => t.text !== task.text)
    setTaskList(updatedTaskList)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App
