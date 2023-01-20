import React, { useState, useEffect } from 'react';

const InfoContext = React.createContext({
  teachers: [],
  educations: [],
  postEducation: ()=>{},
  postTeacher: ()=>{},
});

export const InfoContextProvider = (props) => {
  const [teachers, setTeachers] = useState([]);
  const [educations, setEducations] = useState([]);

  const postEducation = (educationBody)=>{
    fetch('http://localhost:3010/educations', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(educationBody),
  })
}
  const postTeacher = (teacherBody)=>{
    fetch('http://localhost:3010/teachers', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacherBody),
    });
  }

  useEffect(() => {
    const fetchTeachers = async()=>{
        const response = await fetch("http://localhost:3010/teachers")
        const data = await response.json()
        setTeachers(data)
        
    }
    const fetchEducations = async()=>{
      const response = await fetch("http://localhost:3010/educations")
      const data = await response.json()
      setEducations(data)
      
  }
  fetchTeachers()
  fetchEducations()
  }, []);



  return (
    <InfoContext.Provider
      value={{
        teachers,
        educations,
        postEducation,
        postTeacher
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;