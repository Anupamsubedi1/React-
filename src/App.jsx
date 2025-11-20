import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({ label, onClick }) => {
  return ( 
    <div className="card">
      <button onClick={onClick}>{label ? `Click Me (${label})` : `Click Me`}</button>
    </div>
  )
}

const App = () => {
  const handleClick = (num) => {
    console.log(`Card ${num} clicked`);
  };

  return (
    <>
      <Card label="1" onClick={() => handleClick(1)} />
      <Card label="2" onClick={() => handleClick(2)} />
      <Card label="3" onClick={() => handleClick(3)} />
      <Card/>
    </>
  );
}

export default App
