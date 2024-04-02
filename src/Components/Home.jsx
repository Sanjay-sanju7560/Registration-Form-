import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Headers from './Header';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <Headers/>
    <div style={{backgroundColor:'#42c2f5',height:'93vh'}}>
<Container>
<Row>
  <Col>
  <div className=' justify-content-center' style={{marginTop:'100px'}} >
        <h3>Education</h3> <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi rerum placeat sed expedita? Consequatur eveniet magni 
           quas itaque  tenetur iste adipisci autem  dignissimos. Mollitia placeat veniam corrupti assumenda laudantium.</p>
           <br />
           <br />
           <p>New Student? Click here to<span>
            <Link to={'/register'}>
           <Button className='ms-3' variant="light">Register</Button>{' '}
           </Link>
            </span> </p>
        </div>
  </Col>
  <Col></Col>
</Row>

</Container></div>
</>
  )
}

export default Home