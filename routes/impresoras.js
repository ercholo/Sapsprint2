// host + /impresoras
const { Router, request } = require('express');
const router = Router();
const { response } = require('express');
const trabajos = require('../devuelveTrabajos');
const pausar = require('../pausaImpresora');
const reanudar = require('../reanudaImpresoras')
const estados = require('../devuelveEstado');
const cancelarTrabajo = require('../cancelaTrabajo')
const desviaIpOriginal = require('../desviaIpOriginal')
const imprimirPaginaPrueba = require('../imprimirPaginaPrueba')
let numeroPeticiones = 0;
const impresoras = ["16ALAV101", "16ALAV102", "16ALAV201", "16ALAV202", "16ALDEV01", "16ALETQ01", "16ALETQ02", "16ALETQ03", "16ALEXP01", "16ALJEF01", "17ADCOM01", "17ALAV101", "17ALAV102", "17ALDEV01", "17ALGVO01", "17ALJEF01", "17ATTOM01", "17ALETQ00", "17ALETQ01", "17ALETQ02", "18ALAV101", "18ALAV102", "18ALAV201", "18ALAV202", "18ALDEV01", "18ALETQ01", "18ALETQ02", "18ALETQ03", "18ALEXP01", "18ALJEF01"]

router.get('/', async (req, res = response) => {

    // console.log(req.query.almacen)
    // console.log(req.query.HUEVO)

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

router.get('/:nombreImpresora', async (req, res = response) => {

    // console.log(req.query.almacen)
    // console.log(req.query.HUEVO)

    let nombreImpresora = req.params.nombreImpresora;

    let request = trabajos(nombreImpresora)
        .then((response) => res.json(response))
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
});

router.get('/:nombreImpresora/pausa', async (req, res = response) => {

    let nombreImpresora = req.params.nombreImpresora;

    let request = pausar(nombreImpresora)
        .then((response) => res.json(response))
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
});

router.get('/:nombreImpresora/reanuda', async (req, res = response) => {

    let nombreImpresora = req.params.nombreImpresora;

    let request = reanudar(nombreImpresora)
        .then((response) => res.json(response))
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
});

router.get('/:nombreImpresora/estado', async (req, res = response) => {

    let nombreImpresora = req.params.nombreImpresora;

    let request = estados(nombreImpresora)
        .then((response) => res.json(response))
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
});

router.get('/:nombreImpresora/desviaIpOriginal', async (req, res = response) => {

    let nombreImpresora = req.params.nombreImpresora;

    let request = desviaIpOriginal(nombreImpresora)
        .then((response) => res.json(response))
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
});

router.get('/:nombreImpresora/:id/cancelarTrabajo', async (req, res = response) => {

    let nombreImpresora = req.params.nombreImpresora;
    let id = req.params.id;

    let request = cancelarTrabajo(nombreImpresora, id)
        .then((response) => res.json(response))
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
});

router.get('/:nombreImpresora/pagPrueba', async (req, res = response) => {

    let nombreImpresora = req.params.nombreImpresora;

    let request = imprimirPaginaPrueba(nombreImpresora)
        .then((response) => res.json(response))
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
});

module.exports = router;