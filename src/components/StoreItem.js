import React from 'react';
import {Button, Card} from 'react-bootstrap';

const StoreItem = ({id, name, price, imgUrl}) => {

  const quantity = 1;
  return (
    <Card>
      <Card.Img
      variant='top'
      src={imgUrl}
      height='300px'
      style={{objectFit: 'cover'}}
      />

      <Card.Body className='d-flex-column'>
        <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-3'>
          <span className='fs-3'>{name}</span>
          <span className='ms-5 text-muted'>${price}</span>
        </Card.Title>

        <div className='mt-auto'>
          {quantity === 0 ?
            <Button className='w-100'>Add to Cart</Button>
            :
            <div className='d-flex align-items-center flex-column' style={{gap: ".5"}}>
              <div className='d-flex align-items-center justify-content-center' style={{gap: ".5"}}>
                <Button className='me-3'>-</Button>
                <div className='fs-3'>{quantity}</div>
                <Button className='ms-3'>+</Button>
              </div>
              <Button variant='danger' className='mt-2'>Remove</Button>
            </div>
          }
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;