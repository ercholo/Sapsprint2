const {Router} = require('express');
const router = Router();

//
const basicAuth = require('express-basic-auth'),
  AD = require('activedirectory');

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
}


router.get('/', (req, res) => {
    res.json({
        ok: true
            })
});


module.exports = router;