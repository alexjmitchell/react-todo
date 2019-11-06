import axios from "axios"

export function addItem(item) {
  return dispatch => {
    axios.post("/items", { itemName: item }).then(response => {
      dispatch({
        type: "ADD_ITEM",
        payload: response.data
      })
    })
  }
}

export const listItems = () => {
  return dispatch => {
    axios.get("/items").then(response => {
      dispatch({
        type: "LIST_ITEMS",
        payload: response.data
      })
    })
  }
}

export const deleteItem = id => {
  return dispatch => {
    axios.delete("/items/" + id).then(response => {
      dispatch(listItems())
    })
  }
}
