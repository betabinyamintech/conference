import { baseUrl } from ".";

export async function getMeetingRooms() {
    const response = await fetch(baseUrl + '/manage/getMeetingRooms', {
        method: "GET",
        cors: 'cors'
    })

    // console.log(response);
    // return response
    return response.json()
}