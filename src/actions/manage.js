import { baseUrl } from ".";
/////////////////////////////////////////////////ROOMS////////////////////////////////////
export async function getMeetingRooms() {
  const response = await fetch(baseUrl + "/manage/getMeetingRooms", {
    method: "GET",
    cors: "cors",
  });

  return response.json();
}
export default async function updateRoomDetails(updatedRoom, _id) {
  console.log("updatedDetails", updatedRoom);
  console.log("id", _id);
  const response = await fetch(baseUrl + `/manage/updateRoom/${_id}`, {
    method: "PUT",
    cors: "cors",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(updatedRoom),
  });

  return response;
}
/////////////////////////////////////////////////USERS////////////////////////////////////
export async function getAllUsers() {
  const response = await fetch(baseUrl + "/manage/getAllUsers", {
    method: "GET",
    cors: "cors",
  });
  return response.json();
}

export async function updateUserDetails(updatedUser, _id) {
  console.log("updatedDetails", updatedUser);
  console.log("id", _id);
  const response = await fetch(baseUrl + `/manage/updateUser/${_id}`, {
    method: "PUT",
    cors: "cors",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(updatedUser),
  });

  return response;
}
