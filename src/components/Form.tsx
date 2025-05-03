import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import text from '../config/text.json';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!form.current) throw new Error('Form reference is null');

      // Save to Firestore
      const inquiryRef = collection(db, 'Inquiry');
      const docRef = await addDoc(inquiryRef, {
        ...formData,
        submittedAt: new Date().toISOString(),
      });

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus(text.form.successMessage);
        
        // Enhanced success popup
        toast.custom((t) => (
          <div className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-xl rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-lg font-medium text-gray-900">
                    Thanks for connecting! 🎉
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    We're excited to hear from you! Our team will review your message 
                    and get back to you within 24-48 hours. Meanwhile, feel free to 
                    explore more of our services.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        ), {
          duration: 6000,
          position: 'top-center',
        });

        // Reset form
        setFormData({ name: '', email: '', message: '' });
        console.log('Inquiry submitted with ID:', docRef.id);
      } else {
        setStatus(text.form.errorMessage);
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus(text.form.errorMessage);
      console.error('Error submitting inquiry:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-xl mx-auto border-2 border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        {text.form.contactTitle}
      </h3>
      <p className="text-gray-600 mb-6">{text.form.contactSubtitle}</p>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
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
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
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
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
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
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-3 rounded-full transition-colors flex items-center justify-center ${
            loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {loading ? 'Sending...' : text.form.submitButton}
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