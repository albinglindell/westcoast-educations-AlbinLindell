import React, { useContext, useState } from 'react'
import Educations from '../../components/Educations/Educations';
import InfoContext from '../../components/store/info-context';
import Teachers from '../../components/Teachers/Teachers';



function Home() {
    const [InfoValue, setInfoValue] = useState(true)
    const context = useContext(InfoContext);
    const onChangeToEducations = ()=>{
        setInfoValue(true)
    }
    const onChangeToTeachers = ()=>{
        setInfoValue(false)
    }
      return (
        <div>
      <nav className='HomeNav'>
        <ul>
            <li className={InfoValue && "active"} onClick={onChangeToEducations}>Utbildningar</li>
            <li className={!InfoValue && "active"} onClick={onChangeToTeachers}>Lärare</li>
        </ul>
      </nav>
          <div className="homeContainer">
      <div className="infoContainer">
        <h1>{InfoValue ? "Utbildningar" : "Lärare"}</h1>
        {InfoValue ? 
        context.educations.map((course,i) =>{
           return <Educations data={course} key={i} />
        })
       : 
       context.teachers.map((person,i) =>{
        return <Teachers data={person} key={i} />
     })
        }
      </div>
    </div>
  </div>
  )
}

export default Home
