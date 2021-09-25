import React from 'react';
import {Card} from 'react-bootstrap';

const Details = () => (
  <div className="DetailPage">
    {/* nav bar with back button */}
    
{/* text box with ....text */}
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Call Title</Card.Title>
    <Card.Text>
      Some summary of some call
    </Card.Text>
  </Card.Body>
</Card>
  </div>
);

export default Details;