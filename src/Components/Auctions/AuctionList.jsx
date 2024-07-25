import { useState } from 'react';
import { Card, Button, Modal, Form, Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './AuctionList.css';

const AuctionList = ({ auctions, onBidPlaced }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [bidAmount, setBidAmount] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleBid = (auction) => {
    setSelectedAuction(auction);
    setShowModal(true);
  };

  const handleSubmitBid = () => {
    if (selectedAuction && bidAmount) {
      const amount = parseFloat(bidAmount);
      if (isNaN(amount) || amount <= 0) {
        setToastMessage('Please enter a valid bid amount.');
        setShowToast(true);
        return;
      }
      onBidPlaced(selectedAuction.id, amount);
      setShowModal(false);
      setBidAmount('');
      setToastMessage(`Bid of $${amount} placed on auction "${selectedAuction.title}"`);
      setShowToast(true);
    } else {
      setToastMessage('Bid amount cannot be empty.');
      setShowToast(true);
    }
  };

  return (
    <div>
      <h2>Auctions</h2>
      <div className="auction-list">
        {auctions.map((auction) => (
          <Card key={auction.id} className="auction-card">
            <Card.Img 
              variant="top" 
              src={`/assets/${auction.imageUrl}`} 
              alt={auction.title} 
              className="card-img"
            />
            <Card.Body>
              <Card.Title>{auction.title}</Card.Title>
              <Card.Text>{auction.description}</Card.Text>
              <Card.Text>Current Bid: ${auction.currentBid}</Card.Text>
              <Card.Text>Ends: {new Date(auction.endTime).toLocaleString()}</Card.Text>
              <Button variant="primary" onClick={() => handleBid(auction)}>Place Bid</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal for bid entry */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Bid Amount</Form.Label>
              <Form.Control
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="Enter your bid amount"
                min="0.01"
                step="0.01"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitBid}>
            Submit Bid
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast Notification */}
      <Toast
        style={{
          position: 'fixed',
          top: '20px', 
          right: '20px', 
          zIndex: 1050, 
          maxWidth: '300px', 
          width: 'auto' 
        }}
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
      >
        <Toast.Body style={{ color: '#000', fontSize: '14px', padding: '10px' }}>
          {toastMessage}
        </Toast.Body>
      </Toast>
    </div>
  );
};

AuctionList.propTypes = {
  auctions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currentBid: PropTypes.number.isRequired,
    endTime: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  })).isRequired,
  onBidPlaced: PropTypes.func.isRequired,
};

export default AuctionList;
