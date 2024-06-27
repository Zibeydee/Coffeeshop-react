import { ADD, REMOVE } from "./actionTypes"

const reducerCount = (state, action) => {
    switch (action.type){
      case ADD:
        return {count: state.count +1}
      case REMOVE:
        return {count : state.count > 0 ? state.count - 1 : 0}
      default:
        return state
    }
  }

  export {reducerCount}