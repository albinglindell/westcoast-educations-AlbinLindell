import React from 'react'
import { useLocation } from 'react-router-dom'

function CoursePage() {
    const location = useLocation()
  return (
    <div className='infoPage'>
      <div className="infoPageContainer">
        <h2>Utbildningens namn: {location.state?.courseName}</h2>
        <p>Utbildningens nummer: {location.state?.courseNumber}</p>
        <h3>Pågår i: {location.state?.courseLength}</h3>
        <h4>Startar: {location.state?.starting}</h4>
        <p>Beskrivning: {location.state?.description}</p>
      </div>
    </div>
  )
}

export default CoursePage