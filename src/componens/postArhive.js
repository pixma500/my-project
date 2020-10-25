import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';

const Post = ({ title, img, post, del, collectiont, size, type, update, date }) => {
    return (
        <div>
            <CardGroup key={title}>
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text style={{ 'fontSize': '12px' }} >Описание: {post}  </Card.Text>
                        <Card.Text style={{ 'fontSize': '11px' }} > Коллекция: {collectiont} </Card.Text>
                        <Card.Text style={{ 'fontSize': '11px' }} > Размер: {size} </Card.Text>
                        <Card.Text style={{ 'fontSize': '11px' }} >Тип : {type} </Card.Text>
                        <Card.Text style={{ 'fontSize': '11px' }} >Дата : {date}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button  variant="primary" onClick={del}  style={{ margin: "30px", width: '30%' }}>Удалить</Button>
                        <Button  variant="primary" onClick={update} style={{  margin:"30px", width: '30%' }}>Редактировать</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Post;