import actionTypes from "../actions/constants"

const initialState = {}

const itemsViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VIEW_TODOS:
      return {
        ...state,
        ...action.payload.itemsView,
      }
    default:
      return state
  }
}
export default itemsViewReducer
