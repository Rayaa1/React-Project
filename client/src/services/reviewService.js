import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/reviews';

export const getAll = async (productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (productId, text,rating) => {
    const newReview = await request.post(baseUrl, {
        productId,
        text,
        rating,
       
    });

    return newReview;
};
export const remove = async (reviewId) => {
    const result = await request.remove(`${baseUrl}/${reviewId}`);
    return result;
};