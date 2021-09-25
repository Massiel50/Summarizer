import React from 'react'
import { Button, Col, Form, Row, Card} from "react-bootstrap"
import MainLayout from '../layouts/MainLayout'


const Login = () => {
    return (
     <MainLayout>  
     <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <Card>
            <Card.Body>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter #" 
                />
              </Form.Group>
              <br/> 
              <Button className="btn-success" variant="standard" >
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      </MainLayout> )
} 

export default Login;