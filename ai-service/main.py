from fastapi import FastAPI, UploadFile, File
import pytesseract
from PIL import Image
import io

app = FastAPI()

@app.post("/extract-text/")
async def extract_text(file: UploadFile = File(...)):
    # Read the uploaded image
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes))
    
    # Run Tesseract OCR to extract text
    extracted_text = pytesseract.image_to_string(image)
    
    return {"filename": file.filename, "extracted_text": extracted_text}

# Run with: uvicorn main:app --reload --port 8000
