import './App.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router';
import Home from './pages/Home';
import Store from './pages/Store';
import Contacts from './pages/Contacts';
import React, {useContext, useState} from 'react';
import {Container} from 'react-bootstrap';
import {CartContext} from './context/CartContext';

function App() {

  const [searchText, setSearchText] = useState('');

  const {cartItems, setCartItems} = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }
  return (
    <div className="App">
      <h1>Online Store</h1>
      < Header
        handleSearch = {handleSearch}
        searchText = {searchText}
        setSearchText = {setSearchText}

        handleCartToggle = {handleCartToggle}
        closeCart = {closeCart}
        isCartOpen = {isCartOpen}
        setIsCartOpen = {setIsCartOpen}
        cartItems = {cartItems}
      />

      <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/store' element={<Store
            searchText = {searchText}
            cartItems = {cartItems}
            setCartItems = {setCartItems}
          />}/>
          <Route path='/contacts' element={<Contacts />}/>
        </Routes>
      </Container>

    </div>
  );
}

export default App;
