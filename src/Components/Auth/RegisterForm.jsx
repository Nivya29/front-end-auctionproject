import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const RegisterForm = ({ onRegisterSuccess }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5006/api/auth/register', { username, email, password });
            console.log('Registration success:', response.data);
            if (onRegisterSuccess) onRegisterSuccess(); // Call the callback on success
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
        }
    };

    // Inline styles
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(src/img1.jpg)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        opacity: 0.9 // Optional: add some opacity to blend with background
    };

    const titleStyle = {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
        fontSize: '24px',
        fontWeight: 'bold'
    };

    const inputStyle = {
        marginBottom: '15px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        fontSize: '16px'
    };

    const buttonStyle = {
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#ffffff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3'
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={handleRegister} style={formStyle}>
                <div style={titleStyle}>Register</div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={inputStyle}
                />
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

RegisterForm.propTypes = {
    onRegisterSuccess: PropTypes.func.isRequired,
};

export default RegisterForm;
