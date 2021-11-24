import { baseUrl } from ".";

export async function getMeetingRooms() {
    const response = await fetch(baseUrl + '/manage/getMeetingRooms', {
        method: "GET",
        cors: 'cors'
    })

    return response.json()
}