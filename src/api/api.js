import axios from "axios";

const instance = axios.create();

export const api = {
        getUsers() {
            return instance.get("https://randomuser.me/api/?results=10").then(data => data.data.results);
        },
        getPhoto() {
            return fetch('https://random.imagecdn.app/720/480')
        }
}