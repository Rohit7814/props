import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FoodList from './components/FoodList'
function App() {
  const foodItem=["banana","apple","juice"]
  return (
    
      <div>
      <FoodList item={foodItem} />
      </div>
     
    
  )
}

export default App
