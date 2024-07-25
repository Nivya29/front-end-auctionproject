import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5006/api/auth/login', { email, password });
            console.log('Login success:', response.data);
            localStorage.setItem('token', response.data.token);
            onLoginSuccess();
            navigate('/dashboard');
        } catch (error) {
            setError('Invalid Credentials');
            console.error('Login error:', error.response ? error.response.data : error.message);
        }
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    // Inline styles for consistent design
    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("src/img1.jpg")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    };

    const formStyle = {
        maxWidth: '400px',
        width: '100%',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
    };

    const headingStyle = {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
        fontSize: '24px',
    };

    const formGroupStyle = {
        marginBottom: '15px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        fontSize: '16px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#ffffff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    const errorStyle = {
        color: '#dc3545',
        marginTop: '10px',
        fontSize: '14px',
    };

    const backButtonStyle = {
        marginTop: '20px',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#6c757d',
        color: '#ffffff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const backButtonHoverStyle = {
        backgroundColor: '#5a6268',
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <h2 style={headingStyle}>Login</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}>
                    <div style={formGroupStyle}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={inputStyle}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle}
                        />
                    </div>
                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Login
                    </button>
                    {error && <p style={errorStyle}>{error}</p>}
                </form>
                <button
                    onClick={handleBackToHome}
                    style={backButtonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = backButtonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = backButtonStyle.backgroundColor}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginForm;
