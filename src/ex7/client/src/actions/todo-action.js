import actionTypes from "./constants"

const addTodo = (todo) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    todo,
  },
})

export const addTodoAction = (todo) => {
  return (dispatch) => {
    dispatch(addTodo(todo))
  }
}
