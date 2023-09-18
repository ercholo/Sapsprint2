import './App.css';
import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StickyHeadTable, SignIn, Logout } from './components/';
import { ProtectedRoute } from './components/utils/protectedRoute';

const App = () => {

  //Declaro los estados para ver si hay alguien logueado y le paso el estado a Logut y SignIn
  const [isLogged, setIsLogged] = useState(() => {
    const token = localStorage.getItem('token');
    return token !== null;
  });
  
  return (
    <div>
      <BrowserRouter>
         {isLogged && ( <Logout setIsLogged={setIsLogged} isLogged={isLogged} /> )}
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/impresoras" element={<StickyHeadTable />} />
          </Route>
          <Route path="/login" element={<SignIn setIsLogged={setIsLogged}/>} />
          <Route path="/" element={<Navigate to="login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;