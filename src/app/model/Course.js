const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;


const Course = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    videoID: {
        type: String,
        required: true,
    },
    level: {
        type: String
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true,
    },
}, {
    timestamps: true,
});

// Add Plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    deleteAt : true,
    overrideMethods: 'all', });

module.exports = mongoose.model('Course', Course);