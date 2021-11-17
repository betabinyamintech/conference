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
        await response.body()
    }
    return response
}

export  async function getUserBookings (userId){
// alert(userId.user )
    try {
        const res = await fetch(baseUrl + '/auth/bookingOfUserRequest', {
            //צריכה לשנות ל GET
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            cors: 'cors',
            body: JSON.stringify(userId)
        })
        let data = await res.json();
        console.log("data",data);
        if(data) return data    
      
}
    catch (err) {
        console.log("oopsss...error", err.message)
        return
    }
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