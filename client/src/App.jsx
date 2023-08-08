import { useState, useEffect } from 'react';
import './App.css'
import StickyHeadTable from './components/tablas';

const App = () => {

  const [data, setData] = useState([]);

  const getImpresoras = async () => {
    const res = await fetch('http://172.30.5.181:4444/impresoras');
    const data = await res.json();
    setData(data);
    console.log({ data });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getImpresoras();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <StickyHeadTable product={data} />
    </div>
  );
}

export default App;