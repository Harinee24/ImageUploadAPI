import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      setUploadedImage(res.data.imageUrl);
      alert("Upload Successful");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Image Upload</h2>

      <input type="file" onChange={handleChange} />
      <br /><br />

      {preview && (
        <>
          <h4>Preview:</h4>
          <img src={preview} alt="preview" width="200" />
          <br /><br />
        </>
      )}

      <button onClick={handleUpload}>Upload</button>

      {uploadedImage && (
        <>
          <h4>Uploaded Image:</h4>
          <img src={uploadedImage} alt="uploaded" width="200" />
        </>
      )}
    </div>
  );
};

export default ImageUpload;
