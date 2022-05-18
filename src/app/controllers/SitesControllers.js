const Course = require('../model/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SitesController {
    // [Get => news]
    // res.render('home');

    index(req, res, next) {
        Course.find({})
            .then(courses => {
        
                res.render('home', {courses : multipleMongooseToObject(courses)})
            })
            .catch(next);
    }
        
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SitesController;