import React from 'react';
import {Button, Card} from 'react-bootstrap';

const StoreItem = ({ item, cartItems, addToCart, removeFromCart, decreaseQuantity, increaseQuantity}) => {
  const {id, name, price, imgUrl} = item;

  const cartItem = cartItems.find((cartItem) => cartItem.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <Card>
      <Card.Img
      variant='top'
      src={item.imgUrl}
      height='300px'
      style={{objectFit: 'cover'}}
      />

      <Card.Body className='d-flex-column'>
        <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-3'>
          <span className='fs-3'>{item.name}</span>
          <span className='ms-5 text-muted'>${item.price}</span>
        </Card.Title>

        <div className='mt-auto'>
          {quantity === 0 ?
            <Button
              className='w-100'
              onClick={() => addToCart(item)}
            >Add to Cart</Button>
            :
            <div className='d-flex align-items-center flex-column' style={{gap: ".5"}}>
              <div className='d-flex align-items-center justify-content-center' style={{gap: ".5"}}>
                <Button
                  className='me-3'
                  onClick={() => decreaseQuantity(item)}
                >-</Button>
                <div className='fs-3'>{quantity}</div>
                <Button
                  className='ms-3'
                  onClick={() => increaseQuantity(item)}
                >+</Button>
              </div>
              <Button
                variant='danger'
                className='mt-2'
                onClick={() => removeFromCart(item)}
              >Remove</Button>
            </div>
          }
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;