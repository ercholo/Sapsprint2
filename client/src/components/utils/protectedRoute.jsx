import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

export const ProtectedRoute = () => {

    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to='/login' replace />
    }
    return <Outlet />;
}

ProtectedRoute.propTypes = {
    canActivate: PropTypes.string,
    redirectPath: PropTypes.string
}

