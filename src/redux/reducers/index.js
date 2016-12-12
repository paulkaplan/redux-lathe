let spread = (obj, props) => {
  return Object.assign({}, obj, props);
}

let applyTool = (profile, activeToolId, position) => {
  return profile.map((p, i) => {
    let max = 0.1;
    let d = Math.max(0, -Math.abs(i / profile.length - position) + 0.1);
    let t = 0.2 * d;
    return p + (t);
  });
}

let appReducer = (state, action) => {
  if (typeof state === 'undefined') {
    state = {
      activeToolId: 'Square',
      activeToolPosition: 0.5,
      tools: [
        {id: 'Circle', influence: (t) => {return t}, thumbnail: '#'},
        {id: 'Square', influence: (t) => {return t}, thumbnail: '#'},
        {id: 'Pinch', influence: (t) => {return t}, thumbnail: '#'},
        {id: 'Triangle', influence: (t) => {return t}, thumbnail: '#'}
      ],
      profile: Array(100).fill().map((_) => 0)
    }
  }

  switch (action.type) {
    case 'SELECT_TOOL':
      return spread(state, {activeToolId: action.id})
    case 'APPLY_TOOL':
      let newProfile = applyTool(state.profile, state.activeToolId, action.position);
      return spread(state, {activeToolPosition: action.position, profile: newProfile})
    default:
      return state
  }
}

export default appReducer
