import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import TodoReducer from "./reducers/TodoReducer"

const rootReducer = combineReducers({
  TodoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
