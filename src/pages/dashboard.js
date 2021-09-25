import React from "react";
import {useHistory} from 'react-router-dom'

import {Button, Col, Form, Row, Card, InputGroup, FormControl} from 'react-bootstrap';

const Dashboard = () => {
  const history = useHistory();

  const onClickBtn = () => {
    history.push('/details');

  }
  return (
  <><div className="dashcards" /><div>

    {/* section to input phone number and submit button */}
    <Form>
  <Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
        Phone Number
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>@</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>
    </Col>
   
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Row>
</Form>

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