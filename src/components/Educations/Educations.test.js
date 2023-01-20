import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import Educations from './Educations';


const data =  {
    courseName: "Fullstack development",
    courseNumber: "2340",
    courseLength: "2 år",
    starting: "24 augisti 2023",
    description: "lorem ipsum dolor amet"
  }
describe("Educations", ()=>{
    test('Teachers component renders correctly', () => {
      const { getByText } = render(<Educations data={data} />, {wrapper: MemoryRouter})
    
      expect(getByText('Fullstack development')).toBeInTheDocument
      expect(getByText('2340')).toBeInTheDocument
      expect(getByText('Pågår i: 2 år')).toBeInTheDocument
      expect(getByText('Startar: 24 augisti 2023')).toBeInTheDocument
    })

})