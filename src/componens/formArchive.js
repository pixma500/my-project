import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';


const MyForm = ({ getPostInfo, setTitle, setContent, getFile,
     setCollectiont,  postTitle, postCollectiont,postContent,postFile }) => {
    return (
        <Form onSubmit={getPostInfo} >
            <Form.Row>
                <Form.Group as={Col} >
                    <Form.Label>Название</Form.Label>
                    <Form.Control value={postTitle} onChange={e => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Коллекция</Form.Label>
                    <Form.Control as="select" value={postCollectiont} onChange={e => setCollectiont(e.target.value)}>
                        <option></option>
                        <option>Природа</option>
                        <option>Животные</option>
                        <option>Люди</option>
                    </Form.Control >
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Теги</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>
            <Form.Group >
                <Form.Label>Описание</Form.Label>
                <Form.Control placeholder="Описание" value={postContent} onChange={e => setContent(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <input type="file"   onChange={e => getFile(e.target.files)} />
            </Form.Group> 
            <Button type="submit" className="d-flex justify-content-center" style={{ margin: "auto", width: '20%' }} variant="primary">
                Загрузить
                </Button>
        </Form>
    )
}

export default MyForm