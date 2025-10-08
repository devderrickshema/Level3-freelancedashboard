import React, { useState, useRef } from 'react';

const ImageUploader = ({ currentImage, onImageChange, className = "" }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create a preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
      if (onImageChange) {
        onImageChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={className}>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      
      <button
        type="button"
        onClick={triggerFileInput}
        className="mt-4 btn-secondary text-sm"
      >
        Change Photo
      </button>
      
      {previewImage && (
        <div className="mt-3 text-xs text-gray-600">
          <p>New photo selected</p>
          <div className="mt-1 flex space-x-2">
            <button 
              type="button" 
              className="text-red-600 hover:text-red-800"
              onClick={() => setPreviewImage(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;