import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../actions/Todo-actions"

export default function(props) {
  const [item, setItem] = useState("")
  const dispatch = useDispatch()
  
  function handleSubmit(event) {
    event.preventDefault()

    dispatch(addItem(item))
  }

  return (
    <form className="Todo-wrapper" onSubmit={handleSubmit}>
      <input
        type="text"
        name="add-item"
        id="add-item"
        value={item}
        onChange={event => setItem(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
