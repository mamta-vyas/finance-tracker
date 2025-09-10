import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import React from "react";

const Delete = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://finance-tracker-oe5e.onrender.com/api/transactions/${id}`)
      .then(res => setTransaction(res.data));
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`https://finance-tracker-oe5e.onrender.com/api/transactions/${id}`);
    navigate("/");
  };

  if (!transaction) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-2xl font-bold mb-4">Delete Transaction</h2>
      <p className="mb-6">
        Are you sure you want to delete <span className="font-semibold">{transaction.title}</span>?
      </p>
      <div className="flex gap-4">
        <button 
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Yes, Delete
        </button>
        <Link 
          to="/" 
          className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default Delete;