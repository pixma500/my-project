import React from 'react';

import { Card, CardGroup, Container, Row, Col,ListGroup , ListGroupItem} from 'react-bootstrap';

const Post = ({ title, img, post, del, format,size }) => {

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={4 }  style={{ margin: '5px' }}>
                        <CardGroup key={title}>
                            <Card >
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text style={{'fontSize': '12px'}} >Описание: {post}  </Card.Text>
                                      <Card.Text style={{'fontSize': '10px'}} > Формат: {format} </Card.Text>
                                      <Card.Text style={{'fontSize': '10px'}} > Размер: {size} </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <button className="delete" onClick={del}>Удалить</button>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Post;