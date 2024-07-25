import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage';
import LoginForm from './Components/Auth/LoginForm';
import RegisterForm from './Components/Auth/RegisterForm';
import Dashboards from './Components/Dashboards';
import AuctionList from './Components/Auctions/AuctionList';
import UserDashboardPage from './Components/Userdashboard';
import SellerDashboardPage from './Components/SellerDashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './Components/protectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    const handleLoginSuccess = () => {
        window.location.href = '/dashboard'; // Redirect to dashboard after login
    };

    const handleRegisterSuccess = () => {
        window.location.href = '/login'; // Redirect to login after successful registration
    };
    const auctions = [
        {
      id: 1,
      title: 'Antique Oak Dining Table',
      description: 'Beautiful oak dining table from the early 20th century.',
      currentBid: 500,
      endTime: '2024-08-01T12:00:00Z',
      imageUrl: 'img1.avif',
    },
    {
      id: 2,
      title: 'Vintage Rolex Watch',
      description: 'Rolex Oyster Perpetual from the 1970s in excellent condition.',
      currentBid: 2500,
      endTime: '2024-08-05T10:00:00Z',
      imageUrl: 'img2.jpg',
    },
    {
      id: 3,
      title: 'Rare Baseball Card Collection',
      description: 'Collection of vintage baseball cards including rare rookie cards.',
      currentBid: 1500,
      endTime: '2024-07-25T15:30:00Z',
      imageUrl: 'img3.avif',
    },
    {
      id: 4,
      title: 'Antique Persian Rug',
      description: 'Handwoven Persian rug from the 19th century, intricate design.',
      currentBid: 3000,
      endTime: '2024-08-10T14:00:00Z',
      imageUrl: 'img4.jpg',
    },
    {
      id: 5,
      title: 'Vintage Gibson Les Paul Guitar',
      description: 'Classic electric guitar used by famous musicians in the 1960s.',
      currentBid: 4000,
      endTime: '2024-08-15T11:30:00Z',
      imageUrl: 'img5.jpg',
    },
    {
      id: 6,
      title: 'Original Picasso Painting',
      description: 'Rare artwork by Pablo Picasso from his Blue Period.',
      currentBid: 10000,
      endTime: '2024-08-20T16:00:00Z',
      imageUrl: 'img6.jpg',
    },
    {
      id: 7,
      title: 'Vintage Leica Camera',
      description: 'Leica M3 camera with original leather case and lenses.',
      currentBid: 3500,
      endTime: '2024-08-25T09:00:00Z',
      imageUrl: 'img7.avif',
    },
    {
      id: 8,
      title: 'Ancient Roman Coin Collection',
      description: 'Collection of ancient Roman coins, various emperors and denominations.',
      currentBid: 2000,
      endTime: '2024-08-30T13:45:00Z',
      imageUrl: 'img8.jpg',
    },
    {
      id: 9,
      title: 'Rare First Edition Books',
      description: 'Collection of first edition books from renowned authors.',
      currentBid: 6000,
      endTime: '2024-09-05T17:30:00Z',
      imageUrl: 'img9.jpg',
    },
    {
      id: 10,
      title: 'Vintage Typewriter Collection',
      description: 'Assortment of vintage typewriters, including famous models.',
      currentBid: 1800,
      endTime: '2024-09-10T10:15:00Z',
      imageUrl: 'img10.jpg',
    },
        
      ];

      const handleBidPlaced = (auctionId, bidAmount) => {
        
        console.log(`Bid of ${bidAmount} placed on auction ${auctionId}`);
      };

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
                    <Route path="/register" element={<RegisterForm onRegisterSuccess={handleRegisterSuccess} />} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboards /></ProtectedRoute>}>
                        <Route path="auctions" element={<AuctionList auctions={auctions} onBidPlaced={handleBidPlaced}/>} />
                        <Route path="user-dashboard" element={<UserDashboardPage />} />
                        <Route path="seller-dashboard" element={<SellerDashboardPage />} />
                    </Route>
                </Routes>
                <ToastContainer />
            </Router>
        </AuthProvider>
    );
};

export default App;
