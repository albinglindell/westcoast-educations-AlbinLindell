import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Teachers from './Teachers'
import { MemoryRouter } from 'react-router-dom';


afterEach(cleanup)

const data = {
  firstname: 'John',
  surname: 'Doe',
  email: 'johndoe@example.com',
  phone: '555-555-5555',
}
describe("teachers", ()=>{
  test('Teachers component renders correctly', () => {
    const { getByText } = render(<Teachers data={data} />, {wrapper: MemoryRouter})
  
    expect(getByText('John Doe')).toBeInTheDocument
    expect(getByText('E-Post: johndoe@example.com')).toBeInTheDocument
    expect(getByText('Tel. 555-555-5555')).toBeInTheDocument
  })
})