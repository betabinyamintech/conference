import { baseUrl } from ".";

export async function bookCommit(bookDetails) {
    // alert("go to server")
    const response = await fetch(baseUrl + '/auth/bookingcommitRequest', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        cors: 'cors',
        body: JSON.stringify(bookDetails)
    })

    if (response.ok) {
        // localStorage.setItem('token', response.json().token)
    }
    return response
}

export async function checkIfSubscriber(bookDetails) {
    
    const response = await fetch(baseUrl + '/auth/checkIfSubscriberRequest', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        cors: 'cors',
        body: JSON.stringify(bookDetails)
    })

    return response
}

export async function IfSubscriberPay(bookDetails) {
    
    const response = await fetch(baseUrl + '/auth/IfSubscriberPay', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        cors: 'cors',
        body: JSON.stringify(bookDetails)
    })
    if (response.ok){
        return response.json()
    }
    
}