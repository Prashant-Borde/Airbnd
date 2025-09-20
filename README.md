# Airbnd

````markdown
# 🏡 Airbnb Clone (Full-Stack Project)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-8C8C8C?style=for-the-badge&logo=ejs&logoColor=white)

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Screenshots](#-screenshots)
- [Learning Highlights](#-learning-highlights)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📌 Project Overview

This is a **full-stack Airbnb Clone** built using **Node.js, Express, MongoDB, and EJS**.  
It allows users to **list properties, book stays, write reviews, authenticate securely, upload images, and view locations on a map**.

The project was built step-by-step in phases, covering everything from **basic CRUD** to **authentication, authorization, middleware handling, validations, image upload, and deployment**.

---

## 🚀 Features

- ✅ User authentication (SignUp / Login / Logout) with **Passport.js**
- ✅ Secure password storage with **Hashing & Salting**
- ✅ Listings CRUD (Create, Read, Update, Delete)
- ✅ Reviews system with user association
- ✅ Client & server-side validation with custom error handling
- ✅ Flash messages with sessions
- ✅ Image uploads with **Cloudinary**
- ✅ Maps & Geocoding with **Mapbox**
- ✅ Authorization: only owners can edit/delete their listings
- ✅ Responsive frontend with EJS & CSS
- ✅ Deployment with **Render** & **MongoDB Atlas**

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: Passport.js, Express Sessions
- **File Uploads**: Multer, Cloudinary
- **Maps**: Mapbox
- **Deployment**: Render, GitHub

---

## 📂 Project Structure

```bash
Airbnb-Clone/
│── models/          # Mongoose Schemas (User, Listing, Review)
│── routes/          # Express Routes (Listings, Reviews, Users)
│── controllers/     # MVC Controllers
│── middleware/      # Custom Middlewares
│── public/          # Static assets (CSS, JS, Images)
│── views/           # EJS Templates
│── app.js           # Main server file
│── package.json
│── README.md
```
````

---

## ⚡ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/airbnb-clone.git
cd airbnb-clone
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set environment variables

Create a `.env` file in the root:

```env
MONGO_URI=your_mongoDB_connection
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
SESSION_SECRET=your_secret
```

### 4️⃣ Run the app

```bash
npm start
```

### 5️⃣ Open in browser

Visit: `http://localhost:3000`

---

## 📸 Screenshots

| Homepage                 | Listing Page             | Add New Listing        |
| ------------------------ | ------------------------ | ---------------------- |
| ![Home](assets/home.png) | ![Show](assets/show.png) | ![New](assets/new.png) |

---

## 🧑‍💻 Learning Highlights

- CRUD operations with Express & MongoDB
- Middleware, Error handling, and Validation
- Authentication & Authorization (Passport.js)
- MVC Architecture implementation
- File uploads & external APIs integration (Cloudinary, Mapbox)
- Deployment workflow with GitHub + Render

---

## 🔮 Future Enhancements

- 💳 Add booking & payment system
- ⭐ Wishlist / Favorites feature
- 🔍 Advanced search with filters (price, amenities, availability)
- 🔔 Real-time notifications
- ⚛️ React frontend for SPA version

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is **open-source** and available under the [MIT License](LICENSE).

```

```
