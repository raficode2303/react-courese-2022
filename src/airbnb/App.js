import React from 'react'
// STYLES
import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Card from './components/Card'
const App = () => {
  const experiences = [...Array(5).keys()]

  console.log(experiences)
  return (
    <div className='app'>
      <NavBar />
      <Hero />
      <div className='cards-container'>
        {experiences.map((experience) => (
          <Card
            key={experience}
            cardImage='https://www.santacruzsentinel.com/wp-content/uploads/2019/08/Zaferes_Yokohama_tape.jpg'
            redStarImage='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/1076px-Red_star.svg.png'
            rating='5.0'
            reviewCount='6'
            country='USA'
            title='Life lessons with Katie Zaferes'
            price='136'
          />
        ))}
      </div>
    </div>
  )
}

export default App

// Object.keys(obj) - don't run on empty Array
// instead use array.keys()
