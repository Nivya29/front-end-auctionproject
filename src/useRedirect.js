import { useNavigate } from 'react-router-dom';

const useRedirect = (path) => {
    const navigate = useNavigate();
    
    return () => {
        navigate(path);
    };
};

export default useRedirect;
