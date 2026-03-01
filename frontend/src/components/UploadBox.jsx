import React, { useState } from 'react';
import axios from 'axios';

export default function UploadBox() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState("");

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("document", file);

        try {
            const res = await axios.post("http://localhost:5000/api/upload", formData);
            setResult(res.data.text);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="p-10 text-center">
            <h1 className="text-2xl font-bold mb-4">Upload Study Material</h1>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
            <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded">
                Extract Knowledge
            </button>
            
            {result && (
                <div className="mt-8 p-4 bg-gray-100 text-left rounded shadow">
                    <h3 className="font-bold">Extracted Notes:</h3>
                    <pre className="whitespace-pre-wrap">{result}</pre>
                </div>
            )}
        </div>
    );
}
