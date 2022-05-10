const express = require('express');
const router = express.Router();
const termek_controller = require('./controller/termek');
const user_controller = require("./controller/user")
/* GET home page. */
function middleware(req, res, next) {
    // authentication middleware
    // parse username and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    // Verify username and password are set and correct
    user_controller.get_user(username).exec(function (err, user) {
        if (username && password && username === user.username && password === user.password) {
            // Access granted...
            return next()
        }
        // Access denied...
        return next()
    })
}
router.get('/', middleware, function (req, res, next) {
    res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO ANGULAR' });
});

// routing
router.post('/termek', middleware, termek_controller.termek_get_all);                // get all
router.get('/termek/:id', middleware, termek_controller.termek_details);             // get by id
router.post('/termek/add', middleware, termek_controller.termek_create);             // add
router.put('/termek/:id', middleware, termek_controller.termek_update);              // update by id
router.post('/termek/delete/:id', middleware, termek_controller.termek_delete);     // delete by id 

module.exports = router;