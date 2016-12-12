import React from 'react';

let Tool = ({id, isActive, onToolClick}) => {
  return (
    <div onClick={onToolClick}>
      <span>{id} {isActive ? '(active)' : ''}</span>
    </div>
  )
}

export default Tool;
