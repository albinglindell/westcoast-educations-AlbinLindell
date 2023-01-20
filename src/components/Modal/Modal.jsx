import React, { useContext, useRef, useState }  from 'react'
import InfoContext from '../../components/store/info-context';
import { v4 as uuidv4 } from 'uuid';



function Modal({closeModal}) {
    const context = useContext(InfoContext)
    const [modalInfo, setModalInfo] = useState(true)

    let courseNameVal = useRef()
    let courseNumberVal = useRef()
    let courseLengthVal = useRef()
    let startingVal = useRef()
    let descriptionVal = useRef()
    
    let surnameVal = useRef()
    let lastnameVal = useRef()
    let ssnVal = useRef()
    let emailVal = useRef()
    let phoneVal = useRef()
    let competenciesVal = useRef()

    const [skill, setSkill ]= useState([])

    const addSkill = ()=>{
        setSkill([...skill, competenciesVal.current.value])
        document.getElementById("competencies").value = ""
    }

    const exitModal = ()=>{
        closeModal(false)
        setSkill([])
      }

    const changeModalValue = ()=>{
       if(!modalInfo){ setModalInfo(true)
        document.querySelector(".myForm").reset()}
        else{setModalInfo(false)
            document.querySelector(".myForm").reset()}
    }
   

    const submitEducationForm = ()=>{

        let courseName = courseNameVal.current.value
        let courseNumber = courseNumberVal.current.value
        let courseLength = courseLengthVal.current.value
        let starting = startingVal.current.value
        let description = descriptionVal.current.value
        let id = uuidv4()

    
        const educationBody = { courseName, courseNumber, courseLength, starting, description, id };

        context.postEducation(educationBody)    

        closeModal(false)
        window.location.reload()
  };
    
   
    const submitTeacherForm = ()=>{
        let surname = surnameVal.current.value
        let lastname = lastnameVal.current.value
        let ssn = ssnVal.current.value
        let email = emailVal.current.value
        let phone = phoneVal.current.value
        let id = uuidv4()
        let competencies = skill
       
        const teacherBody = { surname, lastname, ssn, email, phone, competencies, id };

        context.postTeacher(teacherBody)

        closeModal(false)
        window.location.reload()
  };

  return (
    <div className='formContainer'>
        <nav className='modalNav'>
            <ul>
                <li onClick={changeModalValue}>{!modalInfo? "Utbildning": "Lärare"}</li>
            </ul>
        </nav>
        {modalInfo ? 
        <form className='myForm' onSubmit={(e)=>{
            e.preventDefault()
            submitEducationForm()
            }}>
            <label htmlFor="coursName">Kursnamn:</label>
                <input 
                ref={courseNameVal} 
                type="text" 
                id="coursName" 
                required
                />
            <label htmlFor="coursNumber">Kursnummer:</label>
                <input 
                ref={courseNumberVal} 
                type="text" 
                id="coursNumber" 
                required
                />
            <label htmlFor="courseLength">Kurslängd:</label>
                <input 
                ref={courseLengthVal} 
                type="text" 
                id="courseLength" 
                required
                />
            <label htmlFor="starting">Kursens start:</label>
                <input
                ref={startingVal}
                type="text" 
                id="starting" 
                required
                />
            <label htmlFor="competencies">Beskrivning av utbildning:</label>
                <input
                ref={descriptionVal}
                type="text" 
                id="competencies" 
                required
                />
                <div className="buttonContainer">
                
                <button>Lägg till utbildning</button>
                <button onClick={(e)=>{
                    e.preventDefault()
                    exitModal()
                    }}>Avbryt</button>
                </div>
        </form> 
        : 
        <form className='myForm' onSubmit={(e)=>{
            e.preventDefault()
            submitTeacherForm()
            }}>
            <label htmlFor="firstname">Förnamn</label>
                <input 
                ref={surnameVal} 
                type="text" 
                id="firstname" 
                required
                />
            <label htmlFor="surname">Efternamn</label>
                <input 
                ref={lastnameVal} 
                type="text" 
                id="surname" 
                required
                />
            <label htmlFor="ssn">Personnummer</label>
                <input 
                ref={ssnVal} 
                type="text" 
                id="ssn" 
                required
                />
            <label htmlFor="email">E-Post</label>
                <input
                ref={emailVal}
                type="email" 
                id="email" 
                required
                />
            <label htmlFor="phone">Telefonnummer</label>
                <input
                ref={phoneVal}
                type="text" 
                id="phone" 
                required
                />
            <label htmlFor="competencies">Kompetenser</label>
                
                <input
                ref={competenciesVal}
                type="text" 
                id="competencies" 
                />
                <button onClick={(e)=>{
                    e.preventDefault()
                    addSkill()
                    competenciesVal = ""
                     }}>Lägg till kompetens</button>
               
                <div className="skills">{skill.map((skill,i)=>{
                    return <h3 key={i}>{skill}</h3>
                })}</div>
                <div className="buttonContainer">
                <button>Lägg till lärare</button>
                <button onClick={(e)=>{
                    exitModal()
                    e.preventDefault()
                    }}>Avbryt</button>
                </div>
        </form> 
    }
    </div>
  )
}

export default Modal