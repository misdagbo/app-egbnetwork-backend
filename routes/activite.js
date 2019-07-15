var serviceActivite = require('../controllers/activite');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.get('/', serviceActivite.retrieveActivite);

router.post('/', serviceActivite.createActivite);

router.post('/', serviceActivite.updateActivite);

router.post('/delete', serviceActivite.deleteActivite);


module.exports = router;