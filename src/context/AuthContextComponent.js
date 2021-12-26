import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextComponent = ({children}) => {
    const [user, setUser] = useState({
        gender: null,
        name: {first: null, last: null},
        dob: {date: null, age: null},
        login: {username: null},
        date: null,
        email: null,
        location: {
            city: null,
            state: null,
            country: null
        },
        phone: null,
        picture: {medium: null, thumbnail: null},
        registered: {date: null, age: null}
    });
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextComponent;