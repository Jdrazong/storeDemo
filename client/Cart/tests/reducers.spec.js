import { expect } from 'chai';
import reducer from '../reducers';
import * as constants from '../constants';

const {
    ADD_CART_ITEM,
    SET_CART_ITEM_QUANTITY,
    CLEAR_CART
} = constants.types;

describe('Cart: reducers', () => {
    it('should handle ADD_CART_ITEM action', () => {
        const cartItem = {
            id: 0,
            field: 'test'
        };

        expect(
            reducer({}, {
                type: ADD_CART_ITEM,
                payload: {
                    item: cartItem
                }
            }).cart
        ).to.deep.equal([
            cartItem
        ]);

        expect(
            reducer({}, {
                type: ADD_CART_ITEM,
                payload: {
                    item: cartItem
                }
            }).cartQuantities
        ).to.deep.equal({
            [cartItem.id]: 1
        });
    });

    it('should handle ADD_CART_ITEM action with with duplicate item added', () => {
        const initialItem = {
            id: 0,
            field: 'test'
        };

        const initialCart = [initialItem];

        expect(
            reducer({ cart: initialCart }, {
                type: ADD_CART_ITEM,
                payload: {
                    item: initialItem
                }
            }).cart
        ).to.deep.equal(initialCart);

        expect(
            reducer({ cartQuantities: { [initialItem.id]: 1 } }, {
                type: ADD_CART_ITEM,
                payload: {
                    item: initialItem
                }
            }).cartQuantities
        ).to.deep.equal({
            [initialItem.id]: 2
        });
    });

    it('should handle SET_CART_ITEM_QUANTITY action', () => {
        const initialItem = {
            id: 0,
            field: 'test'
        };

        expect(
            reducer({ cartQuantities: { [initialItem.id]: 1 } }, {
                type: SET_CART_ITEM_QUANTITY,
                payload: {
                    quantity: 3,
                    itemId: initialItem.id
                }
            }).cartQuantities
        ).to.deep.equal({
            [initialItem.id]: 3
        });
    });

    it('should remove items from cart and cartQuantities reducers when SET_CART_ITEM_QUANTITY sets quantity to 0', () => {
        const initialItem = {
            id: 0,
            field: 'test'
        };

        const initialCart = [initialItem];

        expect(
            reducer({ cart: initialCart }, {
                type: SET_CART_ITEM_QUANTITY,
                payload: {
                    quantity: 0,
                    itemId: initialItem.id
                }
            }).cart
        ).to.deep.equal([]);

        expect(
            reducer({ cartQuantities: { [initialItem.id]: 1 } }, {
                type: SET_CART_ITEM_QUANTITY,
                payload: {
                    quantity: 0,
                    itemId: initialItem.id
                }
            }).cartQuantities
        ).to.deep.equal({});
    });

    it('should handle CLEAR_CART action', () => {
        const initialItem = {
            id: 0,
            field: 'test'
        };

        const initialCart = [initialItem];

        expect(
            reducer({ cart: initialCart }, {
                type: CLEAR_CART
            }).cart
        ).to.deep.equal([]);

        expect(
            reducer({ cartQuantities: { [initialItem.id]: 1 } }, {
                type: CLEAR_CART
            }).cartQuantities
        ).to.deep.equal({});
    });
});
