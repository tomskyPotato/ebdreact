var express = require('express')
var router = express.Router()

router.use(function timeLog (req, res, next){
    console.log('Time: ', Date.now())
    next()
})

var requestTime = function (req, res, next) {
    req.requestTime = Date()
    next()
}

router.use(requestTime)

router.get('/api/time', function (req, res) {
    var responseText = ''
    responseText += req.requestTime
    res.send({ text: responseText })
})

module.exports = router