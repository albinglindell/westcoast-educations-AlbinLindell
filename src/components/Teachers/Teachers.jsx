import React from 'react'
import { Link } from 'react-router-dom'

function Teachers({data}) {
  return (
    <div className='courseContainer'>
      <Link style={{textDecoration:"none"}} state={data} to={`teachers/${data?.id}`}>
        <h2>{data?.firstname} {data?.surname}</h2>
        <p>E-Post: {data?.email}</p>
        <h3>Tel. {data?.phone}</h3>
      </Link>
  </div>
  )
}

export default Teachers