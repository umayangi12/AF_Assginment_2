const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//topic acceptance schema
const topicacceptSchema = new Schema({
    studentgroupid: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

const Topic = mongoose.model("TopicStatus", topicacceptSchema);

module.exports = Topic;