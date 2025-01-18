// src/components/AddBook.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/slice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [form, setForm] = useState({ title: "", author: "", category: "", rating: 0, description: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...form, id: Date.now() }));
    navigate("/browse-books");
  };

  return (
    <form 
  onSubmit={handleSubmit} 
  className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
>
  <input 
    name="title" 
    placeholder="Title" 
    onChange={handleChange} 
    required 
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input 
    name="author" 
    placeholder="Author" 
    onChange={handleChange} 
    required 
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input 
    name="category" 
    placeholder="Category" 
    onChange={handleChange} 
    required 
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input 
    name="rating" 
    placeholder="Rating" 
    type="number" 
    onChange={handleChange} 
    required 
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <textarea 
    name="description" 
    placeholder="Description" 
    onChange={handleChange} 
    required 
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button 
    type="submit" 
    className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Add Book
  </button>
</form>

  );
};

export default AddBook;
