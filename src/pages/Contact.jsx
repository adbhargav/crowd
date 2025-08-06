import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded-lg p-6">
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2 h-32"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
