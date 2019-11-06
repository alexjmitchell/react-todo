const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case "LIST_ITEMS":
      return { ...state, items: action.payload }
    case "DELETE_ITEM":
      return state.filter(({ id }) => id !== action.payload.id)
    default:
      return state
  }
}
