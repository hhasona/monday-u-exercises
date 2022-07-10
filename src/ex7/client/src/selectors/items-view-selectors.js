const getItemsView = (state) => state.itemsView

export const getItems = (state) => {
  const itemsView = getItemsView(state)
  return Object.keys(itemsView).map((key) => itemsView[key])
}
