/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const {Router} = require('express');
const router = Router();
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth');
const basicAuth = require('express-basic-auth'),
  AD = require('activedirectory');


router.post(
  '/new', 
  [//middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
    validarCampos
  ],
  crearUsuario);

router.post(
  '/', 
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
    validarCampos
  ],
  loginUsuario);

router.get('/renew', revalidarToken);

// function myAsyncAuthorizer(username, password, cb) {
//   var ad = new AD(global.config.ldap);
//   ad.authenticate('HEFAME\\' + username, password, function (err, auth) {
//     if (err) {
//       log.error("Usuario: " + username + ": " + err.message);
//       cb(null, false);
//       return;
//     }
//     cb(null, auth);
//   });
// }

// module.exports = function (app) {
//     // autenticación BasicAuth
//     app.use(basicAuth({
//       authorizer: myAsyncAuthorizer,
//       authorizeAsync: true,
//       challenge: true
//     }))
// };

module.exports = router;