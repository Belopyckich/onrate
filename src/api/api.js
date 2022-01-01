import axios from "axios";

const instance = axios.create();

export const api = {
    fetchUsers: () => instance.get("https://randomuser.me/api/?results=10").then(data => data.data.results),
    fetchPhoto: () => fetch('https://random.imagecdn.app/720/480')
}