
import PropTypes from 'prop-types'; // Import PropTypes
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Ensure correct path

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth(); // Use auth context

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};

// Add PropTypes validation
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
