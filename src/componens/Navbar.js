import React from 'react';
import { Nav} from 'react-bootstrap';

const Navb = () => {
    return (

<Nav defaultActiveKey="/" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/"> <h4>Галерея</h4></Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/archiv"><h4>Мой архив</h4></Nav.Link>
  </Nav.Item>
</Nav>
    )
}
export default Navb