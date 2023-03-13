/* eslint-disable react/jsx-pascal-case */
import { Badge, Button, Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const data = [
    {
      img : 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
      title : 'Fancy Product',
      rating : '',
      price : {
        old : '',
        new : '$40.00 - $80.00'
      },
      button : 'View options'
    },
    {
      img : 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
      title : 'Special Item',
      rating : '⭐⭐⭐⭐⭐',
      price : {
        old : '$20.00',
        new : '$18.00'
      },
      button : 'Add to cart'
    },
    {
      img : 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
      title : 'Sale Item',
      rating : '',
      price : {
        old : '$50.00',
        new : '$25.00'
      },
      button : 'Add to cart'
    },
    {
      img : 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
      title : 'Popular Item',
      rating : '⭐⭐⭐⭐⭐',
      price : {
        old : '',
        new : '$40.00'
      },
      button : 'Add to cart'
    },
    {
      img : 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
      title : 'Sale item',
      rating : '',
      price : {
        old : '$50.00',
        new : '$25.00'
      },
      button : 'Add to cart'
    },
    {
      img : 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
      title : 'Fancy Product',
      rating : '',
      price : {
        old : '',
        new : '$120.00 - $280.00'
      },
      button : 'View options'
    },
    {
      img : 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
      title : 'Special Item',
      rating : '⭐⭐⭐⭐⭐',
      price : {
        old : '$20.00',
        new : '$18.00'
      },
      button : 'Add to cart'
    },
    {
      img : 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg',
      title : 'Popular Item',
      rating : '⭐⭐⭐⭐⭐',
      price : {
        old : '',
        new : '$40.00'
      },
      button : 'Add to cart'
    }
  ];
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <div className='navigation'>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Popular Items</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">New Arrivals</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant="light">Cart <Badge bg="secondary">{count}</Badge>
      </Button>
      </Navbar>
      </div>
      <div className='sidebar'>
        <h1>Shop in style</h1>
        <p className='style-para'>With this shop homepage template</p>
      </div>
      <div className='products'>
          {data.map((data,index)=>(
            <DisplayProducts 
              data = {data}
              key = {index}
              count = {count}
              setCount = {setCount}
            />
          ))}
      </div>
      <div className='desc'>
      </div>
    </div>
  );
}

export default App;


function DisplayProducts({data,count,setCount}){

  const [show,setShow] = useState(false);
  function addToCart(){
    setShow(!show)
    setCount(count + 1)
  }
  function removeCart(){
    setShow(!show)
    setCount(count-1)
  }
  return(
    <Card>
      <Card.Img src={data.img} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.rating}</Card.Text>
        <Card.Text><span>{data.price.old}</span> {data.price.new}</Card.Text>
      </Card.Body>
       {!show ? <Button onClick={addToCart}>{data.button}</Button> : " "}
       {show ? <Button variant='danger' onClick={removeCart}>Remove cart</Button> : " "}
    </Card>
  )
}