import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from './Modal';
import { v4 as uuidv4 } from 'uuid';



describe('Modal', () => {

//------------Här är ett tapper försök att testa min post funktion till utbildningar, men jag har uuid så det är omöjligt.


//   test('should post the education form data to the server when the submit button is clicked', async () => {

//     const { getByLabelText, getByText } = render(<Modal/>);
//     const courseNameInput = getByLabelText('Kursnamn:');
//     fireEvent.change(courseNameInput, { target: { value: 'Test course' } });
//     const courseNumberInput = getByLabelText('Kursnummer:');
//     fireEvent.change(courseNumberInput, { target: { value: '123' } });
//     const courseLengthInput = getByLabelText('Kurslängd:');
//     fireEvent.change(courseLengthInput, { target: { value: '4 weeks' } });
//     const startingInput = getByLabelText('Kursens start:');
//     fireEvent.change(startingInput, { target: { value: '01/01/2022' } });
//     const descriptionInput = getByLabelText('Beskrivning av utbildning:');
//     fireEvent.change(descriptionInput, { target: { value: 'Test course for testing' } });
//     const submitButton = getByText('Lägg till utbildning');
//     fireEvent.click(submitButton);

//     // Assert that the server is called with the correct payload

//     const id = uuidv4();
//     const expectedPayload = {
//       courseName: 'Test course',
//       courseNumber: '123',
//       courseLength: '4 weeks',
//       starting: '01/01/2022',
//       description: 'Test course for testing',
//       id: id,
//     };
//       expect(fetch).toHaveBeenCalledWith('http://localhost:3010/educations', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(expectedPayload),
// });
//   });

test("se if the inputs and labels is in the educationform", ()=>{
  render(<Modal />)
      const courseNameInput = screen.getByLabelText('Kursnamn:');
      expect(courseNameInput).toBeInTheDocument
      
      const courseNumberInput = screen.getByLabelText('Kursnummer:');
      expect(courseNumberInput).toBeInTheDocument
      
      const courseLengthInput = screen.getByLabelText('Kurslängd:');
      expect(courseLengthInput).toBeInTheDocument
      
      const startingInput = screen.getByLabelText('Kursens start:');
      expect(startingInput).toBeInTheDocument
      
      const descriptionInput = screen.getByLabelText('Beskrivning av utbildning:');
      expect(descriptionInput).toBeInTheDocument
      
      const registerButton = screen.getByText = "Lägg till utbildning"
      expect(registerButton).toBeInTheDocument

    })  
});
