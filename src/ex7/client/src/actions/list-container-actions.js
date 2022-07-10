import actionTypes from "./constants"

const viewTodos = () => ({
  type: actionTypes.VIEW_TODOS,
})

export const viewTodosAction = () => {
  return (dispatch) => {
    dispatch(viewTodos())
  }
}

