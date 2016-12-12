import { connect } from 'react-redux'
import { selectTool } from '../actions'
import ToolList from '../components/tool_list'

const mapStateToProps = (state) => {
  return {
    tools: state.tools,
    activeToolId: state.activeToolId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToolClick: (id) => {
      dispatch(selectTool(id));
    }
  }
}

const ToolListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolList)

export default ToolListContainer
