
import { fireEvent,  render, screen } from '@testing-library/react'
import App from '../../App';


describe('App Component', () => (

    it('should render app with hello message',()=>{
      render(<App />)

      screen.getByText('Hello world!');
    }),

    

    
    it('should change message on button click',()=>{
        render(<App/>)

        screen.getByText('Lets learn more about testing in React')

        const button = screen.getByText(/Change message/i)

        fireEvent.click(button);

        screen.getByText(/new message/i);

       const oldmessage =  screen.queryByText('Lets learn more about testing in React')

       expect(oldmessage).toBeNull();
    })

))

export default {}