var express = require('express')
var router = express.Router()
const mongoose = require('mongoose');
var names

var mongo = function(){
    const URI = "mongodb://localhost:27017"

    mongoose.connect(URI);

    const Cat = mongoose.model('Cat', { name: String });

    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));

}

var requestTime = function (req, res, next) {
    req.requestTime = Date()
    next()
}

//router.use(mongo)

router.use(requestTime)
    // '/' ist die Ebene /api/time
    router.get('/', function (req, res) {
        res.send({ text: req.requestTime })
})

module.exports = router