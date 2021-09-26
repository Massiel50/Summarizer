import React,{useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {Button, Col, Form, Row, Card, InputGroup, FormControl} from 'react-bootstrap';
import {startCall, fetchSessions} from '../apiService';



const Dashboard = (props) => {
  const history = useHistory();
  const [phone, setPhone] = useState("")
const [sessions , setSessions] = useState([]); 

  const onClickBtn = () => {
    history.push('/details');

  }

  useEffect(() => { 
    fetchSessions().then(({data}) => { 
console.log(data)
      setSessions(data)
    })


  }, [])



  return (
  <div className="dashcards" >


    {/* section to input phone number and submit button */}
    <Form onSubmit={e => e.preventDefault()}>
  <Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
        Phone Number
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>#</InputGroup.Text>
        <FormControl onChange={async (val) => {
     
          await setPhone(val.target.value)
        }} value={phone} id="inlineFormInputGroup" placeholder="Phone Number" />
      </InputGroup>
    </Col>
   
    <Col xs="auto">
      <Button onClick={() => { 
        startCall(phone)
      }} type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Row>
</Form>



{/* section where a list of things are displayed */}
{sessions.map(session => { {

  return <Card body key={session.id}>
<div className="d-grid gap-2">

<h3>{session.call_summary}</h3>
  {
    session.call_text
  }
</div>
</Card>
}})}


  </div>
)
}


export default Dashboard;