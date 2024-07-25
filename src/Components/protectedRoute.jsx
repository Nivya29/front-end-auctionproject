
import PropTypes from 'prop-types'; 
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth(); 

    if (loading) {
        return <div>Loading...</div>; 
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};


ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
