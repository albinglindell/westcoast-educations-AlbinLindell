import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';


const setup = ()=>{
    return render(<Home />, {wrapper: MemoryRouter});
  }

describe("Home component", () => {
  test("successfull render", () => {
    const utils = setup()
    expect(utils).toMatchSnapshot();
    expect(utils).toBeTruthy();
  });

  test("to se if navigation to teachers works", ()=>{
    setup()

    const teacherBtn = screen.getByText("Lärare")

    expect(teacherBtn).toBeInTheDocument
    
    fireEvent.click(teacherBtn)
    
    const heading = screen.getByRole("heading", {name:"Lärare"})

    expect(heading).toBeInTheDocument
  })

});