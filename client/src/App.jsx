import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getImpresoras = async () => {
      const res = await fetch('http://172.30.5.181:4444/impresoras');
      const data = await res.json();
      console.log(data.numeroDeTrabajos)
      setData(data.numeroDeTrabajos);
      console.log(data)
    };
    getImpresoras();
  }, []);

  return (
    <div>
      {
        data ? <p>Impresora: {data}</p> : <p>Loading...</p>
      }
    </div>
  );
}

export default App;