import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'


function Cards(props) {
    return (
        <div className='profs-card'>
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img className='cardImg' variant="top" src={props.photo}/>
                <Card.Body>
                    <Card.Title className='title'>{props.name}</Card.Title>
                    <Card.Text>
                        {props.details}
                    </Card.Text><br/>
                    <Button variant="primary"><a href={props.link} target="_blank">Know More</a></Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default Cards;