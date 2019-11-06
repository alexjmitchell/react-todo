export const initialState = {
  items: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case "LIST_ITEMS":
      return {
        ...state,
        items: action.payload
      }
    // case "DELETE_ITEM":
    //   return {
    //     ...state,
    //     items: [state.items.filter(item => item.id !== action.payload)]
    //   }
    default:
      return state
  }
}
