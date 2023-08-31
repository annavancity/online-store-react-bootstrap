import './App.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router';
import Home from './pages/Home';
import Store from './pages/Store';
import Contacts from './pages/Contacts';
import React from 'react';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Online Store</h1>
      < Header />

      <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/store' element={<Store />}/>
          <Route path='/contacts' element={<Contacts />}/>
        </Routes>
      </Container>

    </div>
  );
}

export default App;
