import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);

    // Function to fetch user data
    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'x-auth-token': token
                }
            };
            const response = await axios.get('https://back-end-auctionproject.onrender.com/api/protected-endpoint', config);
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    
    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
        </div>
    );
};

export default Dashboard;
