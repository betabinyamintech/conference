const location = window.location;
// const isLocalhost = location.hostname === "localhost" || location.hostname === "127.0.0.1"
const isLocalhost = false;
const localhostEndpoint = "http://localhost:4000";
const productionEndpoint = "https://conference-rooms.herokuapp.com";
export const baseUrl = isLocalhost ? localhostEndpoint : productionEndpoint;
