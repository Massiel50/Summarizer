import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'


const Details = () => {
  const history = useHistory();

  return(
  <div className="DetailPage">

  <Button onClick={()=>history.goBack()}>&lt; Back </Button>
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
  )
};

export default Details;