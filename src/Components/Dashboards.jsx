import { Link, Outlet } from 'react-router-dom';

const Dashboards = () => {
    // Inline styles for the dashboard container
    const containerStyle = {
        display: 'flex',
        minHeight: '100vh',
        backgroundImage: 'url("src/img1.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff', 
        fontFamily: 'Arial, sans-serif',
    };

    // Inline styles for the sidebar
    const sidebarStyle = {
        width: '20%',
        borderRight: '1px solid #ccc',
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        color: '#ffffff',
    };

    // Inline styles for the content area
    const contentStyle = {
        width: '80%',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        color: '#ffffff',
    };

    const headingStyle = {
        fontSize: '24px',
        marginBottom: '20px',
    };

    const paragraphStyle = {
        fontSize: '18px',
        marginBottom: '20px',
    };

    return (
        <div style={containerStyle}>
            <div style={sidebarStyle}>
                <h2>Dashboard</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><Link to="/dashboard/auctions" style={{ color: '#ffffff' }}>Auctions</Link></li>
                    <li><Link to="/dashboard/user-dashboard" style={{ color: '#ffffff' }}>User Dashboard</Link></li>
                    <li><Link to="/dashboard/seller-dashboard" style={{ color: '#ffffff' }}>Seller Dashboard</Link></li>
                    <li>
                        <button
                            onClick={() => {
                                localStorage.removeItem('token');
                                window.location.href = '/login';
                            }}
                            style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '4px',
                                backgroundColor: '#dc3545',
                                color: '#ffffff',
                                fontSize: '16px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c82333'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
            <div style={contentStyle}>
                <h1 style={headingStyle}>Welcome to the Auction Platform</h1>
                <p style={paragraphStyle}>
                    This is your dashboard where you can manage and monitor your auctions. 
                    You can create new auctions, place bids on ongoing auctions, and track 
                    your auction activities. Explore the different sections using the sidebar 
                    and make the most out of our auction platform.
                </p>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboards;
