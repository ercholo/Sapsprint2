import { useState, useContext, createContext } from "react";
import PropTypes from 'prop-types';

const UserContext = createContext();


export const useAuth = () => {
    return useContext(UserContext);
}

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(() => {
        const token = localStorage.getItem('token');
        return token !== null;
    });

    const [ user, setUser] = useState("");

    return (
        <UserContext.Provider value={{ isLogged, user, setIsLogged, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;

AuthProvider.propTypes = {
    children: PropTypes.func,
}
