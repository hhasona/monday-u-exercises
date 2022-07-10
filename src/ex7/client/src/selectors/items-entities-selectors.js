const getItemsEntities = (state) => state.itemsEntities

export const getItems = (state) => {
  const itemsEntities = getItemsEntities(state)
  return Object.keys(itemsEntities).map((key) => itemsEntities[key])
}
