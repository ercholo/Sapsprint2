import React from "react";
import './App.css'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // fetch("http://172.30.5.181:4444/impresoras")
    fetch("http://localhost:4444/impresoras")
      .then((res) => res.json())
      .then((data) => setData(data.numeroDeTrabajos))
      .catch(error => console.log(error));
    }, []);


  return (
    <p>Impresora local: {data}</p>
  );
}

export default App;