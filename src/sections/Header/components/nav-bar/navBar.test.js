import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import '@testing-library/jest-dom'

describe("renders the Header component", () => {

    it('should render the nav bar', () => {
        render(<Router>
            <NavBar />
        </Router>);
        const navBar = screen.getAllByRole('link', { name: 'nav-bar-link' });
        expect(navBar.length).toBe(3)
    })


})

