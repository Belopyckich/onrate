import { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersThunk } from "../redux/reducer/userReducer";
import { api } from "../api/api";

export const AuthContext = createContext();

const AuthContextComponent = ({children}) => {
    const dispatch = useDispatch();
    const [myProfile, setMyProfile] = useState({
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

    useEffect(() => {
        if (isAuth) {
            api.getPhoto().then((photo) => (myProfile.picture.large = photo.url));
            dispatch(getUsersThunk());
        }
    }, [isAuth])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, myProfile, setMyProfile}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextComponent;