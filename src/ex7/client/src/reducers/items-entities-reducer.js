import actionTypes from "../actions/constants"

const initialState = {}

const itemsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        ...action.payload.itemsEntities,
      }

    default:
      return state
  }
}

export default itemsEntitiesReducer
