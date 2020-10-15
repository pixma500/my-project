import React from 'react';
import { Form, Button, Col, Container, } from 'react-bootstrap';


const MyForm = ({ getPostInfo, setTitle, setContent, getFile,setFormat, setSize }) => {
    return (
    
            <Form onSubmit={getPostInfo} >
                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>Название</Form.Label>
                        <Form.Control onChange={e => setTitle(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Формат</Form.Label>
                        <Form.Control as="select" defaultValue="Альбом" onChange={e => setFormat(e.target.value)}>
                            <option>Альбом</option>
                            <option>Портрет</option>
                            <option>Квадрат</option>
                        </Form.Control >
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Размер(ВхШ)</Form.Label>
                        <Form.Control onChange={e => setSize(e.target.value)} />
                    </Form.Group>
                </Form.Row>


                <Form.Group >
                    <Form.Label>Описание</Form.Label>
                    <Form.Control placeholder="Описание"  onChange={e => setContent(e.target.value)}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
           
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" onChange={e => getFile(e.target.files)} />
                    </Form.Group>
              

                <Button variant="primary" type="submit">
                    Загрузить
                </Button>
            </Form>
   
    )
}

export default MyForm