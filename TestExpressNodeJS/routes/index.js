﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. Testing github 453*/
var getData = function () {
    var data = {
        'item1': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-76.jpg',
        'item2': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-77.jpg',
        'item3': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-78.jpg'
    }
    return data;
}

    router.get('/', function (req, res) {
    res.render('index', { title: 'Express', "data": getData() });
});

module.exports = router;
