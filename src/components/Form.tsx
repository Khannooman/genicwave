import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import text from '../config/text.json';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    try {
      console.log('Form submitted:', formData);
      setStatus(text.form.successMessage);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(text.form.errorMessage);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-xl mx-auto border-2 border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        {text.form.contactTitle}
      </h3>
      <p className="text-gray-600 mb-6">{text.form.contactSubtitle}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            {text.form.nameLabel}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={text.form.namePlaceholder}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            {text.form.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={text.form.emailPlaceholder}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            {text.form.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={text.form.messagePlaceholder}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          {text.form.submitButton}
          <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
        </button>
      </form>
      {status && (
        <p
          className={`mt-4 text-center ${
            status === text.form.successMessage
              ? 'text-green-600'
              : 'text-red-600'
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default Form;