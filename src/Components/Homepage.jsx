// src/Components/HomePage.jsx
import { Link } from 'react-router-dom';
import './Homepage.css'; // Assuming you have a CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
        <h1>Welcome to the Auction Platform</h1>
        <p>Please register or log in to continue.</p>
        <div className="home-page-buttons">
          <Link to="/register">
            <button className="register-button">Register</button>
          </Link>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
