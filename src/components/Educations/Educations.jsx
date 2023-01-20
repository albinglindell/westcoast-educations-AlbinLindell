import React from 'react';
import {Link} from "react-router-dom"
function Educations({data}) {
  return (
    <div className='courseContainer'>
        <Link state={data} to={`/course/${data?.courseNumber}`}>
      <h2>{data?.courseName}</h2>
      <p>{data?.courseNumber}</p>
      <h3>Pågår i: {data?.courseLength}</h3>
      <h4>Startar: {data?.starting}</h4>
    </Link>
    </div>
  
  )
}

export default Educations
