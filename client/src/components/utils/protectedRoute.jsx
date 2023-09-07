import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ canActivate, redirectPath = '/login' }) => {
    console.log(canActivate)

    const saved = localStorage.getItem("token");
    console.log(saved)

    if (!canActivate) {
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

ProtectedRoute.propTypes = {
    canActivate: PropTypes.bool,
    redirectPath: PropTypes.string
}

