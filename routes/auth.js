/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const {Router} = require('express');
const router = Router();
const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth');
const basicAuth = require('express-basic-auth'),
  AD = require('activedirectory');

router.post('/new', crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);

function myAsyncAuthorizer(username, password, cb) {
  var ad = new AD(global.config.ldap);
  ad.authenticate('HEFAME\\' + username, password, function (err, auth) {
    if (err) {
      log.error("Usuario: " + username + ": " + err.message);
      cb(null, false);
      return;
    }
    cb(null, auth);
  });
}

module.exports = function (app) {
    // autenticación BasicAuth
    app.use(basicAuth({
      authorizer: myAsyncAuthorizer,
      authorizeAsync: true,
      challenge: true
    }))
};

module.exports = router;