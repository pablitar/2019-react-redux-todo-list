import React from 'react';
import VisibilityFilters from '../../constants/visibilityFilters'
import './VisibilitySelector.css'

const readableNames = {}
readableNames[VisibilityFilters.ALL] = "All";
readableNames[VisibilityFilters.DONE] = "Done";
readableNames[VisibilityFilters.TODO] = "To do";

function VisibilityLink({isSelected, name, onClick}) {
  return <span className="visibility-link-container">{isSelected?name:<button className="visibility-link" onClick={onClick}>{name}</button>}</span>
}

export default function VisibilitySelector({selected, onVisibilityChange}) {
  return <div className="visibilityLinks">
    <span>Show: </span>
    {Object.values(VisibilityFilters).map(filter => {
      return <VisibilityLink isSelected={selected === filter} name={readableNames[filter]} onClick={() => onVisibilityChange(filter)} />
    })}
  </div>
}