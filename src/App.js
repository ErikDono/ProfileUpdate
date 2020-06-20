import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Home } from "./pages/Home"
import { Navi } from "./pages/Nav"
import './App.css';

const App = (prop) => (
  <Container className="p-3">
    <Home name={prop.name} />
  </Container>
);

export default App;
