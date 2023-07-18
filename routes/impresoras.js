const {Router} = require('express');
const router = Router();
const {response } = require('express');
const trabajos = require('../devuelveTrabajos');
const numeroPeticiones = 0;

router.get('/', async (req, res = response) => {

    let promesa = trabajos('local');

    promesa.then((valor) => {
        res.json({ numeroDeTrabajos: parseInt(valor)});
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })
    .finally(() => {
        numeroPeticiones++;
    })
});
// -----------------------

//     try {
//         let valor = await trabajos('local');
//         res.json({ message: "hola "+ valor});
//     } catch(error) {
//         res.status(500).json({error: error.message})
//     } finally {
//         numeroPeticiones++;
//     }
    
//   });

module.exports = router;