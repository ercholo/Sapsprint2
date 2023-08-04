const { Router, request } = require('express');
const router = Router();
const { response } = require('express');
const trabajos = require('../devuelveTrabajos');
let numeroPeticiones = 0;
const impresoras = ["16ALAV101", "16ALAV102", "16ALAV201", "16ALAV202", "16ALDEV01", "16ALETQ01", "16ALETQ02", "16ALETQ03", "16ALEXP01", "16ALJEF01", "17ADCOM01", "17ALAV101", "17ALAV102", "17ALDEV01", "17ALGVO01", "17ALJEF01", "17ATTOM01", "18ALAV101", "18ALAV102", "18ALAV201", "18ALAV202", "18ALETQ01", "18ALETQ02", "18ALETQ03", "18ALEXP01", "18ALJEF01"]

router.get('/', async (req, res = response) => {

    let request = impresoras.map(impresora => trabajos(impresora))

    Promise.allSettled(request)

        .then((response) => res.json(response))
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
        .finally(() => {
            numeroPeticiones++;
        })
});

module.exports = router;