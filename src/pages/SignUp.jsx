import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const SignUp = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      alert("Sign Up Successful! You can now log in.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email"
          onChange={handleChange} className="border p-2 w-full" />
        <input type="password" name="password" placeholder="Password"
          onChange={handleChange} className="border p-2 w-full" />
        <button className="bg-green-500 text-white w-full py-2">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
