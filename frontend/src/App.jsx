import React from 'react';
import UploadBox from './components/UploadBox';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center font-sans p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          CogniNote
        </h1>
        <p className="text-gray-500 mt-2">AI-Powered Knowledge Extraction</p>
      </header>
      
      <main className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        {/* This brings in the upload logic we wrote earlier */}
        <UploadBox />
      </main>
    </div>
  );
}

export default App;
