import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CoursePage from './CoursePage';

 const setup = ()=>{
      return render(<CoursePage />, {wrapper: MemoryRouter});
    }

describe("CoursePage component", () => {
   
  test("successfull render", async () => {
    const utils = setup()
    expect(utils).toMatchSnapshot();
    expect(utils).toBeTruthy();
  });

  test("see if you are inside of a course page", ()=>{
    setup()

    const description = screen.getByText("Beskrivning:")

    expect(description).toBeInTheDocument
  })
});