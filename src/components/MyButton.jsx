import React from "react"

const MyButton = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.bgColor,
        border: "none",
        outline: "none",
        color: props.color,
        cursor: "pointer",
        padding: "8px 12px",
        margin: "12px",
        borderRadius: "8px",
      }}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  )
}

export default MyButton
