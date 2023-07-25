import { useState, useEffect } from 'react';
import './App.css'


let request = impresoras.map(impresora => )



  // mapea el array de resultados dentro de un array de response.json() para leer sus contenidos
  .then(responses => Promise.all(responses.map(r => r.json())))
  // todas las respuestas JSON son analizadas: "users" es el array de ellas
  .then(users => users.forEach(user => alert(user.name)));


  

// const impresoras = ["16ALAV101","16ALAV102", "16ALAV201", "16ALAV202", "16ALDEV01", "16ALETQ01", "16ALETQ02", "16ALETQ03", "16ALEXP01", "16ALJEF01", "17ADCOM01", "17ALAV101", "17ALAV102", "17ALDEV01", "17ALGVO01", "17ALJEF01", "17ATTOM01", "18ALAV101", "18ALAV102", "18ALAV201", "18ALAV202", "18ALETQ01", "18ALETQ02", "18ALETQ03", "18ALEXP01", "18ALJEF01"]


// function App() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     console.log(data)
//     }, [data])

//   useEffect(() => {
//     fetch("http://172.30.5.181:4444/impresoras")
//       // fetch("http://localhost:4444/impresoras")
//       .then((res) => res.json())
//       .then((data) => setData(data.valores))
//       // .then((data) => setData(data.numeroDeTrabajos))
//       .catch(error => console.log(error));
//   }, []);


//   return (
//     <div>
//       {/* <p>Impresora local: {data.valores}</p> */}
//       {data.map(impresora => (
//         <div key={impresora}>
//           <p>{impresora.impresora}</p>
//           <p>{impresora.numeroDeTrabajos}</p>
//         </div>
//       ))}
//     </div>
//   );
// }




// useEffect(() => {
//   fetch("http://172.30.5.181:4444/impresoras")
//     // fetch("http://localhost:4444/impresoras")
//     .then((res) => res.json())
//     .then((data) => setData(data.valores))

//     // .then((data) => setData(data.numeroDeTrabajos))
//     .catch(error => console.log(error));
//   console.log(data)
// }, [data]);

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getImpresoras = async () => {
      const res = await fetch('http://172.30.5.181:4444/impresoras');
      const data = await res.json();
      console.log(data.valores)
      setData(data.valores);
      console.log(data)
    };
    getImpresoras();
  }, []);

  return (

    // <div>
    //   {data ? (data.map(impresora => (
    //     <div key={impresora}>
    //       <p>{impresora.impresora}</p>
    //       <p>{impresora.numeroDeTrabajos}</p>
    //     </div>
    //   ))) : <p>Loading...</p>
    //   }
    // </div>
    <div> {data ? <p>Impresora: {data}</p> : <p>Loading...</p>} </div>
  )
}

export default App;