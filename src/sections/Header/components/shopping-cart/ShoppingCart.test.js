import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import '@testing-library/jest-dom'

describe("renders the Header component", () => {

    it('should render shopping cart', () => {
        render(<Router>
            <ShoppingCart />
        </Router>);
        const shoppingCart = screen.getByRole('img', { name: 'shopping-cart' })
        expect(shoppingCart).toBeInTheDocument();
    });

    it('should render shopping cart counter according to items in the cart', () => {
        render(<Router>
            <ShoppingCart itemCount={5} />
        </Router>);
        const shoppingCartItemAmount = screen.getByRole('status', { name: 'cart item counter' })
        expect(shoppingCartItemAmount.textContent).toMatch("5");
    });
})

