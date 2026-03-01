const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const cors = require('cors');

const app = express();
app.use(cors());
const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/upload', upload.single('document'), async (req, res) => {
    try {
        // Prepare the file to send to the Python microservice
        const formData = new FormData();
        formData.append('file', req.file.buffer, req.file.originalname);

        // Call the Python AI Service
        const aiResponse = await axios.post('http://localhost:8000/extract-text/', formData, {
            headers: formData.getHeaders()
        });

        const extractedText = aiResponse.data.extracted_text;

        // TODO: Save extractedText to MongoDB here

        res.json({ success: true, text: extractedText });
    } catch (error) {
        console.error("Extraction failed", error);
        res.status(500).json({ error: 'Failed to process document' });
    }
});

app.listen(5000, () => console.log('Backend running on port 5000'));
