import React from 'react';
import './Todo.css';

function getStyleFor(todo) {
  return todo.done ? {
    color: "gray",
    textDecoration: "line-through"
  } : {}
}

function getIcon(todo) {
  return todo.done ? "☑" : "☐";
}

export default function Todo({onClick,todo}) {
  const classes = ["todo"]
  if(todo.requestId) classes.push("loading")
  if(todo.done) classes.push("done")
  return <div className={classes.join(" ")} onClick={onClick}>
    <span className = "icon">{getIcon(todo)}</span><span style={getStyleFor(todo)} className="text">{todo.description}</span>
  </div>
}