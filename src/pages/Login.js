import React from 'react'
import { Button, Col, Form, Row, Card} from "react-bootstrap"
import MainLayout from '../layouts/MainLayout'
import {useHistory} from 'react-router-dom'

const Login = () => {


    const history = useHistory();
    const goBtn = () => {

            history.push('/dashboard');
    }
    return (
     <MainLayout>  
     <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <Card>
            <Card.Body id="login-card-body">
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter #"
                />
              </Form.Group>
              <br/> 
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter password" 
                />
              </Form.Group>
              <br/> 
              <Button id= "loginBtn" onClick={()=>goBtn()} className="btn-success" variant="standard" >
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </MainLayout> )
} 

export default Login;