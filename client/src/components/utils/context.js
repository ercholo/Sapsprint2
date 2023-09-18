import { useState, useContext, createContext } from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext({
    isLogged: false,
    login: () => { },
});


export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(() => {
        const token = localStorage.getItem('token');
        return token !== null;
    });

    // const login = () => setIsLogged(true);

    return (
        <AuthContext.Provider value={{ isLogged }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

AuthProvider.propTypes = {
    children: PropTypes.func,
}
