import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navigation from './components/Navigation';

function App() {
  const [page, setPage] = useState('login');

  return (
    <div className="App">
      <Navigation setPage={setPage} />
      {page === 'login' && <Login />}
      {page === 'signup' && <Signup />}
    </div>
  );
}

export default App;
