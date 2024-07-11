import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me!</h2>
      <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="mt-8 text-center">
          <img src="/whatsapp.jpg" alt="WhatsApp" className="mx-auto w-32 h-32 mb-2 rounded-full shadow-md" />
          <p className="text-lg font-bold">+91-9952386487</p>
          <a href="https://wa.me/9952386487" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block transition duration-300">
            Message with Me
          </a>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-1 text-center">E-mail</h2>
          <a href="mailto:dhandayuthapanimurugesan14@gmail.com" className="text-blue-500 hover:underline text-lg break-all">dhandayuthapanimurugesan14@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
