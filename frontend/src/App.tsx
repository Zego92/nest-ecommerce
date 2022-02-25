import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/login';
import {Provider} from 'mobx-react';

function App() : JSX.Element {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
