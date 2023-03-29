import React, { useState } from "react"
import MyButton from "./MyButton"

const ProductCard = (props) => {
  const [Qty, setQty] = useState(1)

  function increase() {
    setQty(Qty + 1)
  }

  function decrease() {
    if (Qty < 1) {
      return
    }
    setQty(Qty - 1)
  }

  return (
    <div className="product_card">
      <img src={props.image} alt="" />

      <div className="pc_content">
        <h1>{props.name}</h1>
        <p>Rp {props.price}</p>
        <div className="input_qty">
          <button onClick={decrease}>-</button>
          <input type="number" value={Qty} />
          <button onClick={increase}>+</button>
          <MyButton
            content={"BELI SEKARANG"}
            bgColor={"orange"}
            color={"white"}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
