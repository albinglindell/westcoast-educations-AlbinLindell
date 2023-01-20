import React from 'react'
import { useLocation } from 'react-router-dom'

function TeachersPage() {
    const location = useLocation()
  return (
    <div className='infoPage'>
      <div className="infoPageContainer">
        <h2>Namn: {location.state?.firstname} {location.state?.surname}</h2>
        <p>E-Post: {location.state?.email}</p>
        <h3>Tel. {location.state?.phone}</h3>
        <h4>kompetenser:</h4>
        {location.state?.competencies.map((skill, i)=>{
         return <h4 key={i}>{skill}</h4>
        })}
    </div>
      </div>
  )
}

export default TeachersPage