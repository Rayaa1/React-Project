
import * as request from "../lib/request";

const CART_BASE_URL = 'http://localhost:3030/data/cart';

export const cartService = {
    getCart: async () => {
        const result = await request.get(CART_BASE_URL);
        return result;
    },

    addToCart: async (product) => {
        const result = await request.post(CART_BASE_URL, product);
        return result;
    },

    removeFromCart: async (productId) => {
        const result = await request.remove(`${CART_BASE_URL}/${productId}`);
        return result;
    },
};
