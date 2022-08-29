import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShopDetailLink = ({btnName, to}) => {
  let navigate = useNavigate();
  const moveTo = () => {
    navigate(to);
  };
  return (
    <div className="btn-shop-link" onClick={moveTo}>
        <p>{btnName}</p>
    </div>
  )
}

export default ShopDetailLink