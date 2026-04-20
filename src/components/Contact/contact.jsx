import React, { useState } from 'react';
import './contact.css';

function Contact() {
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General',
    message: ''
  });

  // Función para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Formulario enviado!');
  };

  return (
    <section className="contact-page"> 
    <div className="contact-bloque">
      <h2 className="page-title">Contact us</h2>
      <p className="page-subtitle">
        We’re here if you ever have any questions, comments, or just want to chat.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="name-fields">
          <input
            type="text"
            name="firstName"
            placeholder="Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
        />

        <label className="label">Subject</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        >
          <option>General</option>
          <option>Support</option>
          <option>Bussines</option>
          <option>Other</option>
        </select>

        <textarea
          name="message"
          placeholder="Comment"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send</button>
      </form>
      </div>
    </section>
  );
}

export default Contact;