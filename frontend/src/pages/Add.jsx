import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

const Add = () => {
  const [form, setForm] = useState({ title: "", amount: "", date: "", category: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://finance-tracker-oe5e.onrender.com/api/transactions", form);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">➕ Add Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-2 rounded" name="title" placeholder="Title" onChange={handleChange} />
        <input className="w-full border p-2 rounded" name="amount" placeholder="Amount" type="number" onChange={handleChange} />
        <input className="w-full border p-2 rounded" name="date" type="date" onChange={handleChange} />
        <input className="w-full border p-2 rounded" name="category" placeholder="Category" onChange={handleChange} />
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Save
        </button>
      </form>
    </div>
  );
}

export default Add;