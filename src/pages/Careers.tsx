import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import text from '../config/text.json';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  faLaptopCode,
  faCloud,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import JobApplicationForm from '../components/JobApplicationForm';
import { toast } from 'react-hot-toast';
import { db } from '../firebase'; // Update if path needs to change
import { collection, addDoc } from 'firebase/firestore'; // Firestore functions
// Optional: For resume upload
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface FormData {
  name: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  message: string;
  resume: File | null;
}

const iconMapping: { [key: string]: IconDefinition } = {
  'faLaptopCode': faLaptopCode,
  'faCloud': faCloud,
  'faUser': faUser
};

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const handleApply = (job: string) => {
    setSelectedJob(job);
  };

  const handleCloseForm = () => {
    setSelectedJob(null);
  };

  const handleSubmitApplication = async (formData: FormData) => {
    try {
      if (!formData.resume) {
        throw new Error('Resume is required');
      }

      // Convert File object to a simple object with basic file info
      const resumeInfo = {
        name: formData.resume.name,
        size: formData.resume.size,
        type: formData.resume.type,
        lastModified: formData.resume.lastModified
      };

      // Prepare data for Firestore
      const applicationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        githubUrl: formData.githubUrl,
        linkedinUrl: formData.linkedinUrl,
        message: formData.message,
        jobTitle: selectedJob,
        resume: resumeInfo, // Store basic file info instead of File object
        submittedAt: new Date().toISOString()
      };

      // Add to Firestore
      const applicationsRef = collection(db, 'Applications'); // Note: collection name is case-sensitive
      const docRef = await addDoc(applicationsRef, applicationData);
      
      console.log('Application submitted with ID:', docRef.id);
      
      // Enhanced success notifications
      toast.success('Application submitted successfully!', {
        duration: 4000,
      });
      
      // Show a more detailed success modal or toast
      toast.custom((t) => (
        <div className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col`}>
          <div className="p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-lg font-medium text-gray-900">
                  Congratulations! 🎉
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Your application for {selectedJob} has been successfully submitted.
                  Our team will review your application and get back to you soon.
                  Thank you for your interest in joining our team!
                </p>
              </div>
            </div>
          </div>
        </div>
      ), {
        duration: 6000,
        position: 'top-center',
      });

      handleCloseForm();

    } catch (error: any) {
      console.error('Error submitting application:', error);
      toast.error(error.message || 'Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-800"
          >
            {text.careers.heroSemiTitle}
            <span className="text-blue-600"> {text.careers.heroTitle}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-400"
          >
            {text.careers.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {text.careers.jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex justify-center items-center w-[64px] h-[64px] mb-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={iconMapping[job.icon] || faUser}
                    className="text-blue-600 text-3xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-400 mb-4">{job.description}</p>
                <button
                  onClick={() => handleApply(job.title)}
                  className="rounded-full flex justify-center items-center bg-blue-600 text-white py-2 px-4 text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application Form Modal */}
      <JobApplicationForm
        jobTitle={selectedJob || ''}
        isOpen={!!selectedJob}
        onClose={handleCloseForm}
        onSubmit={handleSubmitApplication}
      />

      {/* Call to Action */}
      <section className="mt-10 py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Couldn't find the role you're looking for?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-blue-100 mb-8 max-w-4xl mx-auto"
          >
            Reach out to us and let us know how you can contribute to our team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex justify-center items-center bg-white text-blue-600 py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;