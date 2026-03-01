const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'Untitled Extraction'
    },
    extractedText: {
        type: String,
        required: true
    },
    summary: {
        type: String, // For when you add NLP summarization later
        default: ''
    },
    tags: {
        type: [String], 
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Note', NoteSchema);
