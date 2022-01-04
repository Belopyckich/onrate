import axios from "axios";

const instance = axios.create();

export const api = {
    fetchUsers: async () => {
        let users = await instance.get("https://randomuser.me/api/?results=10").then(data => data.data.results);
        return await Promise.all(users.map(async user => {
            const friends = await instance.get("https://randomuser.me/api/?results=10").then(data => data.data.results)
            return {...user, friends: friends }
        }))
    },
    fetchPhoto: () => fetch('https://random.imagecdn.app/720/480').then(data => data.url),
    
}