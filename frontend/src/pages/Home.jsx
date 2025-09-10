import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("https://finance-tracker-oe5e.onrender.com/api/transactions")
      .then(res => setTransactions(res.data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">💰 Finance Tracker</h1>
      <div className="flex justify-end mb-4">
        <Link 
          to="/add" 
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          ➕ Add Transaction
        </Link>
      </div>
      <ul className="space-y-4">
        {transactions.map(t => (
          <li 
            key={t._id} 
            className="flex justify-between items-center border p-4 rounded-lg shadow-sm"
          >
            <div>
              <h3 className="font-semibold">{t.title}</h3>
              <p className={`text-sm ${t.amount < 0 ? "text-red-500" : "text-green-600"}`}>
                ₹{t.amount} • {t.category} • {new Date(t.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-3">
              <Link 
                to={`/${t._id}/edit`} 
                className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
              >
                Edit
              </Link>
              <Link 
                to={`/${t._id}/delete`} 
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Delete
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;