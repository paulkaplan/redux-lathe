import React from 'react';

import Tool from './tool';

let ToolList = ({tools, activeToolId, onToolClick}) => {
  return (
    <div>
      {tools.map((tool) => {
        return <Tool
                id={tool.id}
                isActive={tool.id === activeToolId}
                name={tool.name}
                onToolClick={() => onToolClick(tool.id)} />
      })}
    </div>
  )
}


export default ToolList;
