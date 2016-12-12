export const selectTool = (id) => {
  return {
    type: 'SELECT_TOOL',
    id
  }
}

export const applyTool = (position) => {
  return {
    type: 'APPLY_TOOL',
    position
  }
}
