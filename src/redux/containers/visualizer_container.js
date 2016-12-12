import { connect } from 'react-redux'
import { applyTool } from '../actions'
import Visualizer from '../components/visualizer'

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    position: state.activeToolPosition
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onVisualizerClick: (t) => {
      dispatch(applyTool(t));
    }
  }
}

const VisualizerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Visualizer)

export default VisualizerContainer
