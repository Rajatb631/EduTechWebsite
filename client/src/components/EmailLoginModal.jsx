import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function EmailLoginModal({ isOpen, onClose, openSignup }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      onClose(); // Close modal on success
    } catch (err) {
      setError(err.message);
    }
  };

  if (!isOpen) return null;

  
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-100">
        <div className="px-8 pt-8 pb-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Login</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
              ✕
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-1">Welcome back! Sign in to continue</p>
        </div>

        <form onSubmit={handleLogin} className="px-8 pb-4 space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-xl">Login</button>
        </form>

        <div className="px-8 pb-6">
          <p className="text-sm text-gray-500">
            New user?{" "}
            <button onClick={() => {
              onClose();
              openSignup();
            }} className="text-green-600 font-medium hover:underline">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
