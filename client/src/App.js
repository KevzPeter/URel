import React from 'react';
import {Form} from './components/form'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Logo} from './components/logo'
import {NavBar} from './components/navbar'
import {About} from './components/About'
import {Contact} from './components/Contact'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
    <NavBar />
    <div className="row justify-content-center">
      <div className="col-md-3 text-center p-2"><Logo /></div>
      <div className="col-md-6  text-center my-auto"><h1><strong>URel - A URL shortening service</strong></h1></div>
    </div>
    <div className="App">
      <Form />
    </div>
    <About />
    <Contact />
    </>
  );
}

export default App;

