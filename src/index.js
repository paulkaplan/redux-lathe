import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './redux/reducers'
import ToolListContainer from './redux/containers/tool_list_container'
import VisualizerContainer from './redux/containers/visualizer_container'

let store = createStore(appReducer)

render(
  <Provider store={store}>
    <div>
      <ToolListContainer />
      <VisualizerContainer />
    </div>
  </Provider>,
  document.getElementById('root')
)
