import React from 'react';
import {Card} from 'react-bootstrap';



const a = (props) => {
    return (
        <div>
           
  <Card>
    <Card.Img variant="top" src={props.url} style={{ width: '20rem', height:'20rem' }}/>
    <Card.Body>
      <Card.Title>{props.cardTitle} </Card.Title>
      <Card.Text>
        {props.cardText}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{props.updatedTime} </small>
    </Card.Footer>
  </Card>
  

        </div>
    );
};
export default a;