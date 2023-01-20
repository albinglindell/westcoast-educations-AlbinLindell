import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';


describe("Navbar Component", ()=>{
    test("successfull render",  () => {
        const utils = render(<Navbar />, {wrapper: MemoryRouter});
        expect(utils).toMatchSnapshot();
        expect(utils).toBeTruthy();
      });


    test("test if modal works", ()=>{
        render(<Navbar />, {wrapper: MemoryRouter});

        const addModal = screen.getByText("Lägg till lärare och kurser")

        expect(addModal).toBeInTheDocument

        //--------------------Vi fick aldrig lära oss om hur an testar portals, så här är ett tappert försök.

        // fireEvent.click(addModal)

        // const addBtn = screen.getByText("Lägg till utbildning")

        // expect(addBtn).toBeInTheDocument

    })
})