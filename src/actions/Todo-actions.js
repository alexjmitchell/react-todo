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

export function listItems() {
  return dispatch => {
    axios.get("/items").then(response => {
      dispatch({
        type: "LIST_ITEMS",
        payload: response.data
      })
    })
  }
}
