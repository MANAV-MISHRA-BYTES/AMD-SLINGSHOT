# 🧠 CogniNote: AI-Powered Knowledge Extraction

**Built for the AMD Slingshot Hackathon (AI in Education & Skilling)**

CogniNote is an intelligent educational workspace designed to automate knowledge structuring. It eliminates the manual friction of organizing study materials by using an AI-driven pipeline to extract text from unstructured images and documents, categorize concepts, and sync everything to a searchable cloud database.

---

## 🚀 The Problem & Solution
Students managing intensive workloads lose countless hours manually transcribing and categorizing raw study materials (whiteboard images, PDFs, handwritten notes). 

**CogniNote solves this by providing a zero-friction extraction layer:**
1. **Upload:** Drop an image of notes or a textbook page into the UI.
2. **Extract:** The Python AI microservice runs Optical Character Recognition (OCR) to pull the text.
3. **Store:** The MERN backend automatically formats and saves the structured data to a MongoDB database for instant retrieval and search.

---

## 🛠️ Tech Stack & Architecture

This project is built using a decoupled microservices architecture:

* **Frontend:** React.js, Tailwind CSS, Vite
* **Backend API Gateway:** Node.js, Express.js, Multer
* **Database:** MongoDB (Mongoose Object Modeling)
* **AI/ML Microservice:** Python, FastAPI, Tesseract OCR, Pillow

---

## 📁 Project Structure

```text
cogninote-app/
│
├── frontend/             # React.js User Interface
│   ├── src/
│   │   ├── App.jsx       # Main layout
│   │   └── components/   # UI components (UploadBox)
│   └── package.json
│
├── backend/              # Node.js REST API
│   ├── server.js         # Express server & API routes
│   ├── models/
│   │   └── Note.js       # MongoDB schema
│   └── package.json
│
└── ai-service/           # Python FastAPI Machine Learning Layer
    ├── main.py           # Endpoints for OCR & NLP processing
    └── requirements.txt  # Python dependencies
