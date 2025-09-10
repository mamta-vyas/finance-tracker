📌 README Template for MERN Personal Finance Tracker

# 💰 MERN Personal Finance Tracker

A simple **Personal Finance Tracker** built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
This project allows users to add, edit, delete, and view transactions with basic fields like **title, amount, date, and category**.  

---

## 🚀 Features
- Add new transactions ✅
- View list of transactions ✅
- Edit transactions ✅
- Delete transactions (with confirmation page) ✅
- Styled with **Tailwind CSS** for clean UI 🎨
- REST API with full **CRUD operations** 🛠️

---

## 📂 Folder Structure


finance-tracker/
├── backend/ # Express + MongoDB
├── frontend/ # React + Tailwind


---

## 🛠️ Tech Stack
**Frontend:** React, React Router, Axios, Tailwind CSS  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Tools:** Vite, dotenv, CORS  

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/mamta-vyas/finance-tracker
cd mern-finance-tracker

2. Setup Backend
cd backend
npm install


Create a .env file inside backend:

MONGO_URI=your_mongo_connection_string
PORT=5000


Start the backend:

npm start


👉 Runs at: https://finance-tracker-oe5e.onrender.com/api/transactions

3. Setup Frontend
cd frontend
npm install
npm run dev


👉 Runs at: https://finance-trackerappp.netlify.app/

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/transactions	        Get all transactions
GET	/api/transactions/:id	    Get transaction by ID
POST	/api/transactions	    Create a new transaction
PUT	/api/transactions/:id	    Update transaction
DELETE	/api/transactions/:id	Delete transaction
🖼️ Screenshots

(Add screenshots of your app here)

Home Page


Add Transaction


Edit Transaction


Delete Confirmation


🌐 Deployment (Optional)

Backend: [Render / Railway / Heroku]

Frontend: [Netlify / Vercel]

👩‍💻 Author

Mamta Vyas

GitHub: https://github.com/mamta-vyas

LinkedIn: https://www.linkedin.com/in/mamtavyas/