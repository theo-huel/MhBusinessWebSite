"use client"
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MyButton from '../../components/MyButton.jsx';
import SectionTitle from '../../components/SectionTitle.jsx';
import Icon from '../../components/Icon.jsx';
import FadeInOnScroll from '@/components/FadeInOnScroll.jsx';  

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
  const [phoneValue, setPhoneValue] = useState(''); // Renommé pour plus de clarté

  // Styles communs pour les inputs pour éviter la répétition
  const inputClassName = "w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#AD9551]/20 focus:border-[#AD9551] outline-none transition-all duration-300 placeholder-gray-400";
  const labelClassName = "block text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide";

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
      setPhoneValue(newValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t('sending'));

    const fullData = {
        ...formData,
        phoneNbr: phoneValue,
        contactType: selectedOption,
    };

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fullData),
        });

        const result = await response.json();

        if (response.ok) {
            setStatus(t('successMessage'));
            // Reset du formulaire
            setFormData({ companyName: '', contactPerson: '', email: '', message: '' });
            setPhoneValue('');
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
    <main className="bg-gray-50 min-h-screen">
      <FadeInOnScroll delay={0.2}>
      <section className="py-16 container mx-auto px-4 md:px-6">
        <SectionTitle
          title={t('pageTitle')}
          subtitle={t('pageSubtitle')}
        />
        
        {/* Carte du formulaire avec bordure dorée supérieure */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12 border-t-4 border-[#AD9551]">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Groupe 1 : Société et Contact (Côte à côte sur desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="companyName" className={labelClassName}>
                        {t('companyName')} <span className="text-[#AD9551]">*</span>
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className={inputClassName}
                        placeholder="MH Business"
                    />
                </div>
                <div>
                    <label htmlFor="contactPerson" className={labelClassName}>
                        {t('contactPerson')} <span className="text-[#AD9551]">*</span>
                    </label>
                    <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        className={inputClassName}
                        placeholder="John Doe"
                    />
                </div>
            </div>

            {/* Groupe 2 : Téléphone et Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="phoneNbr" className={labelClassName}>
                        {t('phoneNbr')} <span className="text-[#AD9551]">*</span>
                    </label>
                    <input
                        type="text"
                        id="phoneNbr"
                        name="phoneNbr"
                        value={phoneValue}
                        onChange={handleChangePhone}
                        required
                        className={inputClassName}
                        placeholder="+32 400 00 00 00"
                    />
                </div>
                <div>
                    <label htmlFor="email" className={labelClassName}>
                        {t('email')} <span className="text-[#AD9551]">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClassName}
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            {/* Sélection du type de contact */}
            <div>
                <label htmlFor="dropdown" className={labelClassName}>
                    {t('select1')} <span className="text-[#AD9551]">*</span>
                </label>
                <div className="relative">
                    <select 
                        id="dropdown" 
                        value={selectedOption} 
                        onChange={handleSelect} 
                        className={`${inputClassName} appearance-none cursor-pointer`}
                        required 
                    >
                        <option value='' disabled>{t('select.default')}</option>
                        {/* Correction ici: on passe des strings fixes comme valeurs */}
                        <option value="phone">{t('select.phone')}</option>
                        <option value="visio">{t('select.visio')}</option>
                        <option value="present">{t('select.present')}</option>
                    </select>
                    {/* Petite flèche personnalisée pour le select */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"/>
                        </svg>
                    </div>
                </div>
            </div> 

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClassName}>
                {t('message')} <span className="text-[#AD9551]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className={inputClassName}
                placeholder={t('messagePlaceholder') || "..."}
              ></textarea>
            </div>

            {/* Bouton d'envoi */}
            <div className="pt-4">
              <MyButton type="submit" variant='black' className='w-full py-4 text-lg shadow-lg hover:shadow-xl transition-all' >
                {t('sendButton')} 
                <Icon name="Mail" className="inline-block w-5 h-5 ml-2 mb-1 text-[#AD9551]" />
              </MyButton>
            </div>

            {/* Message de statut */}
            {status && (
              <div className={`mt-6 p-4 rounded-lg text-center font-medium animate-fade-in ${
                  status === t('successMessage') 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {status}
              </div>
            )}

          </form>
        </div>
      </section>
      </FadeInOnScroll>
    </main>
  );
};

export default ContactPage;