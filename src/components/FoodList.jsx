import React from 'react'

const FoodList = (props) => {
  console.log(props.item[2]);
    return (
    <div>
      <p>{props.item[1]}</p>
    </div>
  )
}

export default FoodList
