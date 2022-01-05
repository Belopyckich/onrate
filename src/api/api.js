import axios from "axios";

const randomuser = axios.create();
const rawg = axios.create();
const key = "a94890fa343949499b12fcd774d4a989";

export const randomuserApi = {
    fetchUsers: async () => {
        let users = await randomuser.get("https://randomuser.me/api/?results=10").then(data => data.data.results);
        return await Promise.all(users.map(async user => {
            const friends = await randomuser.get("https://randomuser.me/api/?results=10").then(data => data.data.results)
            return {...user, friends: friends }
        }))
    },
    fetchPhoto: () => fetch('https://random.imagecdn.app/720/480').then(data => data.url),
}

export const rawgApi = {
    fetchGamesByPage: (page = 1, count = 20) => rawg.get(`https://api.rawg.io/api/games?key=${key}&page=${page}&page_size=${count}`).then(data => data.data.results),
    fetchGamesBySearch: (search) => rawg.get(`https://api.rawg.io/api/games?key=${key}&search=${search}`).then(data => data.data.results)
}