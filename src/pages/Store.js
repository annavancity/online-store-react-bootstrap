import React, {useContext} from 'react';
import storeItems from '../data/items.json';
import StoreItem from '../components/StoreItem';
import {Col, Row} from 'react-bootstrap';
import {CartContext} from '../context/CartContext';

const Store = ({searchText, cartItems, setCartItems}) => {
  //const [cartItems, setCartItems] = useContext(CartContext); // global state that sored in CartContext (created by using useContext hook)

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, {...item, quantity: 1}])
    }
  }

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  }

  const decreaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    )
    setCartItems(updatedCartItems);
  }

  const increaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
    setCartItems(updatedCartItems);
  }

  const filteredItems = storeItems.filter((item) => {
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  })
  return (
    <div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {filteredItems.map(item =>
  //        <Col>{JSON.stringify(item)}</Col>
          <Col key={item.id}>
            < StoreItem
              item = {item}
              cartItems = {cartItems}
              addToCart = {addToCart}
              removeFromCart ={removeFromCart}
              decreaseQuantity = {decreaseQuantity}
              increaseQuantity = {increaseQuantity}
            />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Store;