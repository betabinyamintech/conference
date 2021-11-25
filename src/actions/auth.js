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
        console.log('token received and written to localStorage')
        localStorage.setItem('token', (await response.json()).token)
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
        console.log('written token!')
    }
    return response
}

export async function loginOtp(details) {
    const response = await fetch(baseUrl + '/auth/verifyPhoneCode', {
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
        console.log('auth - loginOtp - written token!')
    } 
    return response
}

//מוציא מהתוקן את פרטי היוזר
export async function getUserDetails() {
    const response = await fetch(baseUrl + '/auth/user', {
        method: "GET",
        cors: 'cors',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    if (!response.ok) {
        localStorage.removeItem('token')
    }
    if (response.ok) {
        return await response.json()
    }
}

