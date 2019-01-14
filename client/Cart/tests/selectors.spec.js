import { expect } from 'chai';
import selectors from '../selectors';

describe('Cart: selectors', () => {
    const { getItemsWithQuantities, getFirstItemCurrency, getTotalCartPrice } = selectors;

    const initialStore = {
        cart: {
            cart: [
                {
                    id: 0,
                    currency: 'EUR',
                    price: 25
                },
                {
                    id: 1,
                    currency: 'EUR',
                    price: 21
                }
            ],
            cartQuantities: {
                0: 2,
                1: 3
            }
        }
    };

    it('should return items with proper quantities', () => {
        expect(getItemsWithQuantities(initialStore)).to.deep.equal([
            { quantity: initialStore.cart.cartQuantities[0], product: initialStore.cart.cart[0] },
            { quantity: initialStore.cart.cartQuantities[1], product: initialStore.cart.cart[1] }
        ]);
    });

    it('should return first item currency', () => {
        expect(getFirstItemCurrency(initialStore)).to.equal(initialStore.cart.cart[0].currency);
    });

    it('should return total cart price', () => {
        const totalPrice = initialStore.cart.cart[0].price * initialStore.cart.cartQuantities[0]
        + initialStore.cart.cart[1].price * initialStore.cart.cartQuantities[1];

        expect(getTotalCartPrice(initialStore)).to.equal(totalPrice);
    });
});
