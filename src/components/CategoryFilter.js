import React from "react"

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
  const handleCategory = (event) => {
    const category = event.target.textContent
    setSelectedCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat) => (
        <button
          className={selectedCategory === cat ? "selected" : ""}
          onClick={handleCategory}
          key={cat}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
