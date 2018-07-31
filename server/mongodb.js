var express = require('express')
var router = express.Router()
const mongoose = require('mongoose');
var names

var mongo = function(){
    const URI = "mongodb://user3:pin1233@ds125938.mlab.com:25938/reactjs"
    
    mongoose.connect(URI, { useNewUrlParser: true });

    const Cat = mongoose.model('Dog', { name: String });

    const kitty = new Cat({ name: 'Zilde' });
    kitty.save().then(() => console.log('meow'));

}

var requestTime = function (req, res, next) {
    req.requestTime = Date()
    next()
}

router.use(mongo)

router.use(requestTime)
    // '/' ist die Ebene /api/time
    router.get('/', function (req, res) {
        res.send({ text: req.requestTime })
})

module.exports = router