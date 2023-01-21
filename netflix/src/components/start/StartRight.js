import React from 'react';
import {Row, Col} from 'react-bootstrap';

const StartRight = (props) => {
  return (
     <Row className='start-section2'>
      <Col className='startright-f'>
        <p className='startright-title'>{props.title}</p>
        <p className='startright-info'>{props.info}</p>
      </Col>
      <Col>
        <img className="startright-img" src={props.img}>
         
        </img>
      </Col>
    </Row>
  )
}

export default StartRight