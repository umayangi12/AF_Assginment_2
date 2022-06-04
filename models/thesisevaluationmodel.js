const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//schema of thesis evaluation model
const thesisevaluationSchema = new Schema({
    studentgroupid: {
        type: String,
        required: true
    },
    marks: {
        type: String,
        required: true
    },
})

const ThesisEvaluation = mongoose.model("ThesisEvaluation", thesisevaluationSchema);

module.exports = ThesisEvaluation;