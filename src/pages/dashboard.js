import React from "react";
import {useHistory} from 'react-router-dom'

import {Card, Form,Button} from 'react-bootstrap';

function Dashboard () {
  const history = useHistory();

  const onClickBtn = () => {
    history.push('/details');

  }
  return (
  <><div className="dashcards" /><div>

    {/* section to input phone number and submit button */}
    <Card>
    <Card.Header as="h5">Give me your phone number</Card.Header>
    <Card.Body>
      <Form.Control type="text" placeholder="Readonly input here..." readOnly />
        <Button variant="primary">Submit</Button>
    </Card.Body>
</Card>

{/* section where a list of things are displayed */}
<Card body>
<div className="d-grid gap-2">
  <Button onClick={()=> onClickBtn()} variant="secondary" size="lg">
    Call Date/ time info
  </Button>
</div>
</Card>

<Card body>
<div className="d-grid gap-2">
  <Button onClick={()=> onClickBtn()} variant="secondary" size="lg">
  Call Date/ time info
  </Button>
</div>
</Card>

<Card body>
<div className="d-grid gap-2">
  <Button  onClick={()=> onClickBtn()} variant="secondary" size="lg">
  Call Date/ time info
  </Button>
</div>
</Card>
  </div></>
  )
};

export default Dashboard;