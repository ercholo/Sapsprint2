import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { StickyHeadTable } from './components/tablas';
import { SignIn } from './components/login';
import { ProtectedRoute } from './components/utils/protectedRoute';
import { useLocalStorage } from 'react-use';


const App = () => {

  const [isToken, setIsToken] = useLocalStorage('token');
  console.log('Token:', isToken);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route element={<ProtectedRoute canActivate={isToken} redirectPath='/impresoras' />}>
            <Route path="/impresoras" element={<StickyHeadTable />} />
          </Route>
          {/* <Route index element={<App />} />
        <Route path="dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;