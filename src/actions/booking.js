import { baseUrl } from ".";

export async function bookCommit(bookDetails) {
  const response = await fetch(baseUrl + "/booking/bookingcommitRequest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    cors: "cors",
    body: JSON.stringify(bookDetails),
  });

  if (response.ok) {
    await response;
  }
  return response.json();
}

export async function getUserBookings() {
  try {
    const res = await fetch(baseUrl + "/booking/user", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      cors: "cors",
    });
    let data = await res.json();
    // console.log("data", data);
    if (data) return data;
  } catch (err) {
    console.log("oopsss...error", err.message);
    return;
  }
}

export async function checkIfSubscriber(bookDetails) {
  const response = await fetch(baseUrl + "/auth/checkIfSubscriberRequest", {
    method: "POST",
    headers: {
      authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    cors: "cors",
    body: JSON.stringify(bookDetails),
  });

  return response;
}

export async function IfSubscriberPay(bookDetails) {
  console.log("bookDetails goes to server", bookDetails);
  const response = await fetch(baseUrl + "/auth/IfSubscriberPay", {
    method: "POST",
    headers: {
      authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    cors: "cors",
    body: JSON.stringify(bookDetails),
  });
  if (response.ok) {
    return response.json();
  }
}

export async function getRooms() {
  console.log("getRooms");
  try {
    const res = await fetch(baseUrl + "/booking/rooms", {
      //צריכה לשנות ל GET
      method: "GET",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      cors: "cors",
    });
    let data = await res.json();
    console.log("data", data);
    if (data) return data;
  } catch (err) {
    console.log("oopsss...error", err.message);
    return;
  }
}

export async function deleteMeetingRequest(bookId) {
  console.log("deleteMeetingRequest");
  try {
    const res = await fetch(baseUrl + "/booking/delete", {
      //צריכה לשנות ל GET
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      cors: "cors",
      body: JSON.stringify(bookId),
    });
    let data = await res.json();
    console.log("data", data);
    if (data) return data;
  } catch (err) {
    console.log("oopsss...error", err.message);
    return;
  }
}
