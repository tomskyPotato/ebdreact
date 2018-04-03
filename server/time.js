var express = require('express')
var router = express.Router()

var requestTime = function (req, res, next) {
    req.requestTime = Date()
    console.log('Time: ', req.requestTime)
    next()
}

router.use(requestTime)

router.get('/', function (req, res) {
    res.send({ text: req.requestTime })
})

module.exports = router