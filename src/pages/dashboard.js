import React from "react";
import {Card, Form,Button} from 'react-bootstrap';


function Dashboard () {
  return (
  <><div className="dashcard" /><div>

    {/* section to input phone number and submit button */}
    <Card>
    <Card.Header as="h5">Give me your phone number</Card.Header>
    <Card.Body>
      <Form.Control type="text" placeholder="Readonly input here..." readOnly />
        <Button variant="primary">Submit</Button>
    </Card.Body>
</Card>

{/* section where a list of things are displayed */}
<Card body>This is some text within a card body.</Card>

<Card body>This is some text within a card body.</Card>

<Card body>This is some text within a card body.</Card>
  </div></>
  )
};

export default Dashboard;