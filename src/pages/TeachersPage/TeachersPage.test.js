import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TeachersPage from "./TeachersPage"


const setup = ()=>{
  return render(<TeachersPage />, {wrapper: MemoryRouter});
}

describe("TeachersPage component", () => {
  test("successfull render", () => {
    const utils = setup();
    expect(utils).toMatchSnapshot();
    expect(utils).toBeTruthy();
  });

  test("see if you are inside of a course page", ()=>{
    setup()

    const competencies = screen.getByText("kompetenser:")

    expect(competencies).toBeInTheDocument
  })
});