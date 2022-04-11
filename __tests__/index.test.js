import { render, fireEvent, cleanup } from '@testing-library/react';
import Home from '../pages/index';
import Card from '../src/components/Card';
import Form from '../src/components/Form';

afterEach(cleanup);

describe('Index page', () => {
    test('Index page painted', () => {
        const { getByTestId } = render(<Home />);
        expect(getByTestId('app-title')).toBeInTheDocument();
    })
    
    test('Form component mounted on index page load', () => {
        const { getByRole } = render(<Home />);
        expect(getByRole('form')).toBeInTheDocument();
    })
    
    test('Forecast component not mounted on index page load', () => {
        const { queryByTestId } = render(<Home />);
        expect(queryByTestId('forecast-mounted')).not.toBeInTheDocument();
    })
})

describe('Card', () => {
    test('Change active section (component) when corresponding heading is clicked', () => {
        const { getByTestId, getByRole } = render(<Card />);
        const dataSection = getByTestId("data-section-heading");
        const forecastSection = getByTestId("forecast-section-heading");
        fireEvent.click(forecastSection);
        expect(getByTestId('forecast-mounted')).toBeInTheDocument();
        fireEvent.click(dataSection);
        expect(getByRole('form')).toBeInTheDocument();
    })
})

describe('Form', () => {
    test('Disable form button when clicked and change button text', async () => {
        // Mock API
        global.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve({
                    data: {}
                })
            })
        );
        const { getByRole } = render(<Form />);
        const button = getByRole("button", { name: 'Check Forecast' });
        fireEvent.click(button);
        expect(button.textContent).toBe("Fetching Data");
        expect(button.disabled).toBeTruthy();
    
        // Clear mock
        global.fetch.mockClear();
        delete global.fetch;
    })
})