import { baseUrl } from ".";

export async function bookCommit(bookDetails) {
    // alert("go to server")
    const response = await fetch(baseUrl + '/booking/bookingcommitRequest', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        cors: 'cors',
        body: JSON.stringify(bookDetails)
    })


    if (response.ok) {
        await response
    }
    return response.json()
}

export  async function getUserBookings (){
// alert(userId.user )
    try {
        const res = await fetch(baseUrl + '/booking/user', {
            //צריכה לשנות ל GET
            method: "GET",
            headers: {
                'authorization': localStorage.getItem('token')
            },
            cors: 'cors',
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
            'authorization': localStorage.getItem('token'),
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
            'authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        cors: 'cors',
        body: JSON.stringify(bookDetails)
    })
    if (response.ok){
        return response.json()
    }
    
}