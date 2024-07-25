
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const UserDashboard = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Hi, this is the User Dashboard</Card.Title>
              <div style={{ margin: '20px 0' }}>
                <Button variant="primary" as={Link} to="/dashboard/auctions">
                  View Auctions
                </Button>
              </div>
              <div>
                <Button variant="secondary" as={Link} to="/dashboard/seller-dashboard">
                  Create Auctions
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
