import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const initialAuctions = [
  {
    id: 1,
    title: 'Antique Oak Dining Table',
    description: 'Beautiful oak dining table from the early 20th century.',
    currentBid: 500,
    endTime: '2024-08-01T12:00:00Z',
    imageUrl: 'https://example.com/oak-table.jpg',
  },
  // Add more sample auctions if needed
];

const SellerDashboardForm = () => {
  const [auctions, setAuctions] = useState(initialAuctions);
  const [newAuction, setNewAuction] = useState({
    title: '',
    description: '',
    currentBid: '',
    endTime: '',
    imageUrl: '',
  });

  const handleCreateAuction = (e) => {
    e.preventDefault();
    const { title, description, currentBid, endTime, imageUrl } = newAuction;
    if (title && description && currentBid && endTime) {
      const newAuctionItem = {
        id: auctions.length + 1,
        title,
        description,
        currentBid: parseFloat(currentBid),
        endTime,
        imageUrl,
      };
      setAuctions((prevAuctions) => [...prevAuctions, newAuctionItem]);
      setNewAuction({
        title: '',
        description: '',
        currentBid: '',
        endTime: '',
        imageUrl: '',
      });
      console.log('New auction created:', newAuctionItem);
      alert(`Auction "${newAuctionItem.title}" created successfully!`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAuction((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Seller Dashboard</h1>

      <Form onSubmit={handleCreateAuction}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={newAuction.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={newAuction.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCurrentBid">
          <Form.Label>Current Bid</Form.Label>
          <Form.Control
            type="number"
            name="currentBid"
            value={newAuction.currentBid}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEndTime">
          <Form.Label>End Time</Form.Label>
          <Form.Control
            type="datetime-local"
            name="endTime"
            value={newAuction.endTime}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formImageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            value={newAuction.imageUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Auction
        </Button>
      </Form>
    </div>
  );
};

export default SellerDashboardForm;
