var express = require('express')
var router = express.Router()

var requestTime = function (req, res, next) {
    req.requestTime = Date()
    next()
}

router.use(requestTime)
// '/' ist die Ebene /api/time
router.get('/', function (req, res) {
    res.send({ text: req.requestTime })
})

module.exports = router