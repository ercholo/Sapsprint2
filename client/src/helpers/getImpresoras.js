// import { useCallback, useState } from "react";



// export const getImpresoras = useCallback(async () => {

//     const [data, setData] = useState([]);

//     const res = await fetch('http://172.30.5.181:4444/impresoras');
//     const newData = await res.json();
//     // console.log(newData)
    
//     if (JSON.stringify(data) !== JSON.stringify(newData)) {
//         setData(newData);
//         console.log({ data: newData });
//     }
//  }, [data]);