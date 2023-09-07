const jwt = require('jsonwebtoken');
require('dotenv').config();
const fs = require('fs');
const AD = require('activedirectory');

const ldap = {
    url: process.env.LDAP_URL,
    tlsOptions: {
        ca: [fs.readFileSync(process.env.LDAP_CACERT)]
    }
}

const generarJWT = (username) => {
    return new Promise((resolve, reject) => {
        const payload = { username };

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '3h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("No se puede generar el token");
            }
            resolve(token);
        });
    });
}

const myAsyncAuthorizer = async (username, password, cb) => {

    return new Promise((resolve, reject) => {
        try {
            var ad = new AD(ldap);
            // console.log(username);
            // console.log(password);

            ad.authenticate('HEFAME\\' + username, password, async function (err, auth) {
                if (err) {
                    console.log("Usuario: " + username + ": " + err.message);
                    resolve(false);
                    // return cb(null, false);
                }

                try {
                    // console.log(auth)
                    // const token = await generarJWT(username);
                    // console.log(token);
                    if (auth) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                    // return cb(null, true);
                } catch (error) {
                    console.error("Error al generar el token:", error);
                    return;
                    // return cb(null, false);
                }
            });
        } catch (error) {
            console.error("Error en la autenticación:", error);
            // return cb(null, false);
        }
    });
}

module.exports = {
    generarJWT,
    myAsyncAuthorizer
}