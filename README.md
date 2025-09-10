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
<img width="1354" height="476" alt="Screen Shot 2025-09-10 at 6 25 25 PM" src="https://github.com/user-attachments/assets/180cf3c7-07c6-49ac-8e81-7596e57b897e" />


Add Transaction
<img width="1355" height="712" alt="Screen Shot 2025-09-10 at 6 27 25 PM" src="https://github.com/user-attachments/assets/fc4a6ed9-5c90-42c6-b6a8-f0b9c2a6d949" />


Edit Transaction
<img width="1346" height="717" alt="Screen Shot 2025-09-10 at 6 26 39 PM" src="https://github.com/user-attachments/assets/9ed9abc6-596d-4a67-8699-153ef896fe09" />
<img width="1349" height="474" alt="Screen Shot 2025-09-10 at 6 26 13 PM" src="https://github.com/user-attachments/assets/95c40041-1558-439e-9709-23278dc48b14" />


Delete Confirmation
<img width="1351" height="586" alt="Screen Shot 2025-09-10 at 6 26 48 PM" src="https://github.com/user-attachments/assets/1461c6fa-0dec-44c3-ade2-eb557fad470d" />


🌐 Deployment (Optional)

Backend: [Render / Railway / Heroku]

Frontend: [Netlify / Vercel]

👩‍💻 Author

Mamta Vyas

GitHub: https://github.com/mamta-vyas

LinkedIn: https://www.linkedin.com/in/mamtavyas/
