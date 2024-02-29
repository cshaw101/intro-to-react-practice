import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [character, setCharacter] = useState(null)
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    
  })
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {character.map((item) => {
        <p>{item}</p>
      })}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
