# 🖼️ Image Upload Feature (React + Node.js + Multer)

This project demonstrates how to implement an image upload feature using:

React.js (Frontend)

Node.js + Express.js (Backend)

Multer (File Upload Middleware)


The application allows users to:

Select an image

Preview the image before upload

Upload the image to the server

Display the uploaded image from the backend



---

🚀 Features

📂 File upload using Multer

🖼️ Image preview before uploading

🌐 REST API endpoint for image upload

📁 Static folder serving uploaded images

🔄 Full-stack integration between React and Express



---

🛠️ Tech Stack

Frontend

React.js

Axios


Backend

Node.js

Express.js

Multer

CORS



---

📁 Project Structure

All files are maintained in the main branch:

imageServer.js     → Backend server with upload endpoint
ImageUpload.js     → React component for image upload & preview
uploads/           → Folder where uploaded images are stored

⚠️ Make sure to manually create the uploads folder in the project root before running the backend.


---

⚙️ Installation & Setup

1️⃣ Initialize Backend

npm init -y
npm install express multer cors


---

2️⃣ Install Frontend Dependency

npm install axios


---

▶️ Run the Backend Server

node imageServer.js

Server runs at:

http://localhost:5000


---

⚛️ Run the React Application

Ensure ImageUpload.js is imported inside App.js.

npm start

Frontend runs at:

http://localhost:3000


---

📡 API Endpoint

📤 Upload Image

POST /upload

Request Type: multipart/form-data

Field Name: image


Response Example:

{
  "message": "Image uploaded successfully",
  "imageUrl": "http://localhost:5000/uploads/filename.jpg"
}


---

🔄 Application Flow

1. User selects an image.


2. React shows a preview using URL.createObjectURL().


3. On clicking Upload, the image is sent to backend using FormData.


4. Multer saves the file in the uploads folder.


5. Backend returns the image URL.


6. React displays the uploaded image from the server.




---

🎯 Learning Outcomes

Implementing file upload with Multer

Handling multipart/form-data in Express

Previewing images in React

Serving static files in Express

Integrating frontend and backend



---
