import './styles.css'

import React from 'react'
import Navbar from './components/Navbar'
import Experiences from './components/Experiences'
import Card from './components/Card'
import data from './data.js'

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />
  })
  return (
    <div className="app">
      <Navbar />
      <Experiences />
      <div className="card-lists">{cards}</div>
    </div>
  )
}
