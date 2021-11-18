import { baseUrl } from ".";

export async function sendPhoneVerificationCode(phoneNumber) {

    const response = await fetch(baseUrl + '/auth/sendVerification?phone=' + phoneNumber, {
        method: "GET",
        cors: 'cors'
    })
    return response
}



export async function verifyCode(obj) {
    const response = await fetch(baseUrl + '/auth/verifyPhoneCode', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        cors: 'cors',
        body: JSON.stringify(obj)
    })


    return response.json()
}