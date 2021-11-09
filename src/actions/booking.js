import { baseUrl } from ".";

export async function bookCommit(bookDetails) {
    // alert("go to server")
    const response = await fetch(baseUrl + '/booking/bookingcommitRequest', {
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