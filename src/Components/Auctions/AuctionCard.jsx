import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; // Import PropTypes
import { Card, Button, Modal, Form } from 'react-bootstrap';

const AuctionCard = ({ auction }) => {
    const [show, setShow] = useState(false);
    const [bidAmount, setBidAmount] = useState('');
    const [error, setError] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlePlaceBid = async () => {
        if (bidAmount > auction.currentBid) {
            try {
                await axios.post('http://localhost:5006/api/bids', {
                    auctionId: auction.id,
                    bidAmount,
                });
                alert('Bid has been placed!');
                handleClose();
                // Optionally refresh auctions list
            } catch (error) {
                console.error('Error placing bid:', error.response ? error.response.data : error.message);
                setError('Failed to place bid. Please try again.');
            }
        } else {
            setError('Bid amount must be greater than the current bid.');
        }
    };

    return (
        <Card style={{ width: '18rem', marginBottom: '20px' }}>
            <Card.Img variant="top" src={auction.imageUrl} />
            <Card.Body>
                <Card.Title>{auction.title}</Card.Title>
                <Card.Text>{auction.description}</Card.Text>
                <Card.Text>Current Bid: ${auction.currentBid}</Card.Text>
                <Button variant="primary" onClick={handleShow}>Place Bid</Button>
            </Card.Body>

            {/* Modal for placing bid */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Place Your Bid</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBidAmount">
                            <Form.Label>Bid Amount</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter your bid"
                                value={bidAmount}
                                onChange={(e) => setBidAmount(e.target.value)}
                            />
                            {error && <Form.Text className="text-danger">{error}</Form.Text>}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlePlaceBid}>
                        Place Bid
                    </Button>
                </Modal.Footer>
            </Modal>
        </Card>
    );
};

// Define PropTypes for validation
AuctionCard.propTypes = {
    auction: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        currentBid: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default AuctionCard;
