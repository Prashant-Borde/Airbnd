🏡 Airbnb Clone (Full-Stack Project)

📑 Table of Contents

Project Overview

Features

Tech Stack

Project Structure

Installation & Setup

Screenshots

Learning Highlights

Future Enhancements

Contributing

License

📌 Project Overview

This is a full-stack Airbnb Clone built using Node.js, Express, MongoDB, and EJS.
It allows users to list properties, book stays, write reviews, authenticate securely, upload images, and view locations on a map.

The project was built step-by-step in phases, covering everything from basic CRUD to authentication, authorization, middleware handling, validations, image upload, and deployment.

🚀 Features

✅ User authentication (SignUp / Login / Logout) with Passport.js

✅ Secure password storage with Hashing & Salting

✅ Listings CRUD (Create, Read, Update, Delete)

✅ Reviews system with user association

✅ Client & server-side validation with custom error handling

✅ Flash messages with sessions

✅ Image uploads with Cloudinary

✅ Maps & Geocoding with Mapbox

✅ Authorization: only owners can edit/delete their listings

✅ Responsive frontend with EJS & CSS

✅ Deployment with Render & MongoDB Atlas

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript, EJS

Backend: Node.js, Express.js

Database: MongoDB (Atlas)

Authentication: Passport.js, Express Sessions

File Uploads: Multer, Cloudinary

Maps: Mapbox

Deployment: Render, GitHub

📂 Project Structure
Airbnb-Clone/
│── models/ # Mongoose Schemas (User, Listing, Review)
│── routes/ # Express Routes (Listings, Reviews, Users)
│── controllers/ # MVC Controllers
│── middleware/ # Custom Middlewares
│── public/ # Static assets (CSS, JS, Images)
│── views/ # EJS Templates
│── app.js # Main server file
│── package.json
│── README.md

⚡ Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/yourusername/airbnb-clone.git
cd airbnb-clone

2️⃣ Install dependencies
npm install

3️⃣ Set environment variables

Create a .env file in the root:

MONGO_URI=your_mongoDB_connection
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
SESSION_SECRET=your_secret

4️⃣ Run the app
npm start

5️⃣ Open in browser

Visit: http://localhost:3000

📸 Screenshots
Homepage Listing Page Add New Listing

🧑‍💻 Learning Highlights

CRUD operations with Express & MongoDB

Middleware, Error handling, and Validation

Authentication & Authorization (Passport.js)

MVC Architecture implementation

File uploads & external APIs integration (Cloudinary, Mapbox)

Deployment workflow with GitHub + Render

🔮 Future Enhancements

💳 Add booking & payment system

⭐ Wishlist / Favorites feature

🔍 Advanced search with filters (price, amenities, availability)

🔔 Real-time notifications

⚛️ React frontend for SPA version

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you would like to change.

📜 License

This project is open-source and available under the MIT License
.

---
