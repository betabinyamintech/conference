import { baseUrl } from ".";

export async function register(details) {
    const response = await fetch(baseUrl + '/auth/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        cors: 'cors'
    })

    if (response.ok) {
        localStorage.setItem('token', response.json().token)
    }
    return response
}