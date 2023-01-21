import React from 'react';
import {Row, Col} from 'react-bootstrap';

const StartLeft = (props) => {
  return (
   <Row className='start-section2'>
    <Col className='startleft-i'>
      <img className="startleft-img" src={props.img}>

      </img>
    </Col>
    <Col className='startleft-f'>
      <p className='startleft-title'>{props.title}</p>
      <p className='startleft-info'>{props.info}</p>
    </Col>
   </Row>
  )
}

export default StartLeft