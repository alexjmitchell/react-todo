import React from "react"
import { useSelector } from "react-redux"
import "../styles/base.css"
import Form from '../components/Form'

export default function(props) {
  const items = useSelector(appState => appState.TodoReducer.items)
  

  console.log("Items ======>> ", items)
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <Form />
      <ul>
        {items.map((item, i) => (
          <li key={"item-" + i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
