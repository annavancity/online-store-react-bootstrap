import React, {useRef} from 'react';
import {Button} from 'react-bootstrap';
import '../styles/Cart.css'
const Cart = ({items, isCartOpen, closeCart}) => {
  const cartRef = useRef(null) // cartRef is a reference to know if click happened
  const isClose = (event) => {
    if (cartRef.current && cartRef.current.contains(event.target)) {
      return true; // cart should be closed
    } return false; // cart shouldn't be closed
  }

  return (
    <div ref={cartRef}
         className={isCartOpen ? 'cart open' : 'cart'}
         onClick={closeCart}
    >

      <div className="cart-content">
        <h2>Cart Items</h2>
        {
          items.length === 0 ? (
            <p>You cart is empty</p>
          ) : (
            <ul>
              {items.map((item, index) => (
                <li key={index}
                    direction="horizontal"
                    gap={3}
                    className="d-flex align-items-center"
                >
                  <img src={item.imgUrl} style={{width: '100px', height: '60px', objectFit: 'cover' }}/>
                  <div>
                    <div className="me-auto">
                      {item.name} {' '}
                      {item.quantity > 1 && (
                        <span className='text-muted' style={{fontSize: '.5rem'}}>
                          x{item.quantity}
                        </span>
                      )}
                    </div>
                    <div>
                      ${item.price} x {item.quantity}
                    </div>

                  </div>
                   <Button
                     variant="outline-danger"
                     size="sm"
                     /*onClick={() => removeFromCart(item)}*/
                   >
                     &times;
                   </Button>
                </li>
              ))}
            </ul>
          )
        }
      </div>
      
    </div>
  );
};

export default Cart;