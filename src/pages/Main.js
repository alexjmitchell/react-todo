import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "../styles/base.css"
import Form from "../components/Form"
import { listItems, deleteItem } from "../actions/Todo-actions"

export default function(props) {
  const items = useSelector(appState => appState.TodoReducer.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listItems())
  })

  console.log("Items ======>> ", items)
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <Form />
      <ul>
        {items.map((item, i) => (
          <>
            <button
              id={item.id}
              onSubmit={dispatch(deleteItem(item))}
              key={"button-" + i}
            >
              Delete
            </button>
            <li key={"item-" + i}>{item.itemName}</li>
          </>
        ))}
      </ul>
    </div>
  )
}
