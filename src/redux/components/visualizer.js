import React, {Component} from 'react';
import Preview from './preview';

class Visualizer extends Component {
  onMouseDown = (e) => {
    let i = e.nativeEvent.offsetY / this.props.height;
    let onVisualizerClick = this.props.onVisualizerClick;
    this.interval = setInterval(() => {onVisualizerClick(i)}, 10)
  }

  onMouseUp = (e) => {
    clearInterval(this.interval);
  }

  render() {
    let width = this.props.width;
    let height = this.props.height;
    let r = 5;
    let offset = 100;
    let profile = this.props.profile;
    let position = this.props.position;

    return (
      <div onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} style={{position: 'relative'}}>
        <Preview width={width} height={height} profile={profile} />
        <svg width={width} height={height} style={{position: 'absolute', top: 0, left: 0}}>
          {profile.map((p, i) => {
            return <circle cx={width / 2 + p * offset} cy={height * i / profile.length} r={r} stroke="black" fill="red" />
          })}
          <circle cx={width / 2 - 2 * r} cy={height * position} r={r} stroke="black" fill="green" />
        </svg>
      </div>
    )
  }
}

Visualizer.defaultProps = {
  height: 500,
  width: 500
}

export default Visualizer
