import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";

const Edit = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", amount: "", date: "", category: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/transactions/${id}`)
      .then(res => setForm(res.data));
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/transactions/${id}`, form);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">✏️ Edit Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          className="w-full border p-2 rounded" 
          name="title" 
          value={form.title} 
          placeholder="Title" 
          onChange={handleChange} 
        />
        <input 
          className="w-full border p-2 rounded" 
          name="amount" 
          value={form.amount} 
          type="number" 
          placeholder="Amount" 
          onChange={handleChange} 
        />
        <input 
          className="w-full border p-2 rounded" 
          name="date" 
          type="date" 
          value={form.date ? form.date.substring(0,10) : ""} 
          onChange={handleChange} 
        />
        <input 
          className="w-full border p-2 rounded" 
          name="category" 
          value={form.category} 
          placeholder="Category" 
          onChange={handleChange} 
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Edit;