import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (email,name, password) => request.post(`${baseUrl}/register`, {
    email,
    name,
    password,
});

export const logout = () => request.get(`${baseUrl}/logout`);