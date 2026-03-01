const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const cors = require('cors');
const mongoose = require('mongoose');
const Note = require('./models/Note'); // <-- Import your new model

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
mongoose.connect('YOUR_MONGODB_CONNECTION_STRING', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/upload', upload.single('document'), async (req, res) => {
    try {
        const formData = new FormData();
        formData.append('file', req.file.buffer, req.file.originalname);

        // 1. Call Python AI Service
        const aiResponse = await axios.post('http://localhost:8000/extract-text/', formData, {
            headers: formData.getHeaders()
        });

        const extractedText = aiResponse.data.extracted_text;

        // 2. Save to MongoDB using your Note model
        const newNote = new Note({
            title: req.file.originalname,
            extractedText: extractedText,
            tags: ['auto-extracted'] 
        });

        const savedNote = await newNote.save();

        // 3. Send the saved document back to the React frontend
        res.json({ success: true, note: savedNote });
    } catch (error) {
        console.error("Extraction failed", error);
        res.status(500).json({ error: 'Failed to process document' });
    }
});

app.listen(5000, () => console.log('Backend running on port 5000'));
