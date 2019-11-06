import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "../styles/base.css"
import Form from "../components/Form"
import { listItems, deleteItem } from "../store/actions/Todo-actions"

export default props => {
  const items = useSelector(state => state.TodoReducer.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listItems())
  }, [dispatch])

  console.log("Items ======>> ", items)
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <main className="todo-list">
        <Form />
        <ul>
          {items.map((item, i) => (
            <div className="list">
              <button
                id={item.id}
                key={"button-" + i}
                onClick={event => dispatch(deleteItem(item.id))}
              >
                X
              </button>
              <li key={"item-" + i}>{item.itemName}</li>
            </div>
          ))}
        </ul>
      </main>
    </div>
  )
}
