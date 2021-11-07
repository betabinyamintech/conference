import { baseUrl } from ".";

export async function register(details) {
    const response = await fetch(baseUrl + '/auth/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        cors: 'cors',
        body: JSON.stringify(details)
    })

    if (response.ok) {
        localStorage.setItem('token', response.json().token)
    }
    return response
}

export async function login(details) {
    const response = await fetch(baseUrl + '/auth/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        cors: 'cors',
        body: JSON.stringify(details)
    })

    if (response.ok) {
        const token = (await response.json()).token
        localStorage.setItem('token', token)
    }
    return response
}

export async function getUserDetails() {
    console.log("getuserdetails")
    const response = await fetch(baseUrl + '/auth/user', {
        method: "GET",
        cors: 'cors',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    if (response.ok) {
        return await response.json()
    }
}