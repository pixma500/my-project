import React from 'react';
import { Card, Button} from 'react-bootstrap';

const Post = ({ key, img, description, add}) =>
                    <Card style={{ width: '18rem', margin :'10px' }} key={key} >
                        <Card.Img  src={img}/> 
                        <Card.Body >
                            <Card.Title>{description}</Card.Title>
                      
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          
                            <Button onClick={add}  variant='primary'
                                className='ml-1'>add
                            </Button>
                        </Card.Footer>
                    </Card>


export default Post;
