import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../Components/Button';

describe("Button component", () => {
    it("should render with red background if disabled", () => {
        render(<Button disabled onClick={() => { }}>click me</Button>);


        const buttonElement = screen.getByRole('button', { name: 'click me' });


        expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
    });

    it("should call onclick prop on click ", () => {
        const onClick = jest.fn();
        render(
            <Button disabled onClick={onClick}>
                Click me
            </Button>
        );
        const button = screen.getByText(/Click me/i)

        fireEvent.click(button)

        expect(onClick).toHaveBeenCalled();
    })
});


export default {}