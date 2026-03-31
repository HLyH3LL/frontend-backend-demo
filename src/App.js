import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: new Date()
      });

      alert("Form submitted successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page">
      <div className="form-container">
        <h1>
          Technological Institute of the Philippines - TIP Manila  
          <br /> Contact Form
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button onClick={submitForm}>
          Submit Form
        </button>
      </div>
    </div>
  );
}

export default App;