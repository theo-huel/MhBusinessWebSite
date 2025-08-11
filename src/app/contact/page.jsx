"use client"
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MyButton from '../../components/MyButton.jsx';
import SectionTitle from '../../components/SectionTitle.jsx';
import Icon from '../../components/Icon.jsx';
import FadeInOnScroll from '@/components/FadeInOnScroll.jsx';  
import Link from "next/link";



// Page Contact

const ContactPage = () => {
  const { t } = useTranslation('contact');

  const [formData, setFormData] = useState({
    companyName:'',
    contactPerson:'',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const [selectedOption, setSelectedOption] = useState('');
  
  const [value, setValue] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
   
  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChangePhone = (e) => {
    const newValue = e.target.value;
    // Autoriser uniquement les chiffres et le + en première position
    if (/^\+?\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus(t('sending'));

  // Construire les données complètes à envoyer
  const fullData = {
    ...formData,
    phoneNbr: value, // Remplacer par le vrai numéro entré
    contactType: selectedOption, // Ajouter le type de contact sélectionné
  };

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fullData),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus(t('successMessage'));
      setFormData({
        companyName: '',
        contactPerson: '',
        phoneNbr: '',
        email: '',
        message: '',
      });
      setValue('');
      setSelectedOption('');
      setTimeout(() => setStatus(''), 5000);
    } else {
      setStatus(`${t('error')}: ${result.message || t('defaultError')}`);
    }
  } catch (error) {
    console.error('Form error:', error);
    setStatus(t('serverError'));
  }
};


  return (
    <main className="pt-10 bg-gray-50 mt-19">
      <FadeInOnScroll delay={0.2}>
      <section className="py-16 container mx-auto px-6">
        <SectionTitle
          title={t('pageTitle')}
          subtitle={t('pageSubtitle')}
        />
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">{t('companyName')}</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">{t('contactPerson')}</label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="phoneNbr" className="block text-sm font-medium text-gray-700 mb-2">{t('phoneNbr')}</label>
              <input
                type="text"
                id="phoneNbr"
                name="phoneNbr"
                value={value}
                onChange={handleChangePhone}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>
        <div>
      <label htmlFor="dropdown">{t('select1')}</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelect} 
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
      required >
        <option  value=''>{t('select.default')}</option>
        <option value={selectedOption.phone}>{t('select.phone')}</option>
        <option value={selectedOption.visio}>{t('select.visio')}</option>
        <option value={selectedOption.present}>{t('select.present')}</option>
      </select>
      
            </div> 


            {/* <div>
              <iframe src="https://calendar.google.com/calendar/embed?src=matis%40mhbusiness.be&ctz=Europe%2FBrussels" 
              style="border: 0" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
            </div> */}

            {/* <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{t('subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div> */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('message')}</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              ></textarea>
            </div>
              <div className="flex justify-center">
              <MyButton type="submit" variant='black' className='w-full' >
                {t('sendButton')} 
                <Icon name="Mail" className="inline-block w-5 h-5 ml-2 mb-1" />
              </MyButton>
            </div>
            {status && (
              <p className={`mt-4 text-center ${status.includes('succès') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </form>

          {/* <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('directInfoTitle')}</h3>
            <p className="text-gray-700 text-lg mb-2">
              <Icon name="Mail" className="inline-block w-6 h-6 mr-2 text-[#AD9551]" />
              contact@mhbusiness.com
            </p>
            <p className="text-gray-700 text-lg">
              <Icon name="Phone" className="inline-block w-6 h-6 mr-2 text-[#AD9551]" />
              0477 64 46 42
            </p>
            <p className="text-gray-700 text-lg mt-2">
              {t('responseCommitment')}
            </p>
          </div> */}
        </div>
      </section>
      </FadeInOnScroll>
    </main>
  );
};

export default ContactPage;
