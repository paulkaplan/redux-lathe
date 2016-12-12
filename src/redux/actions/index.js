export const selectTool = (id) => {
  return {
    type: 'SELECT_TOOL',
    id
  }
}

export const toggleToolDirection = () => {
  return {
    type: 'TOGGLE_TOOL_DIRECTION'
  }
}

export const applyTool = (position) => {
  return {
    type: 'APPLY_TOOL',
    position
  }
}
