import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../store/actions/Todo-actions"

export default function(props) {
  const [item, setItem] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(addItem(item))
  }

  const handleOnChange = event => {
    setItem(event.target.value)
  }

  return (
    <form className="Todo-wrapper" onSubmit={handleSubmit}>
      <input
        type="text"
        name="add-item"
        id="add-item"
        value={item}
        onChange={handleOnChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
