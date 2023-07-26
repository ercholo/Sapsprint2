export const getImpresoras = async () => {
    const res = await fetch('http://172.30.5.181:4444/impresoras');
    const data = await res.json();
    // console.log(data.numeroDeTrabajos)
    // setData(data[3].value.valor);
    // console.log(data[3].value.valor)
    setData(data)
    console.log(data)
  };