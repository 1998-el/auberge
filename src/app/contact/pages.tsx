'use client';

import { useState } from 'react';
import SimpleBanner from '../components/banners/SimpleBanner';
import { 
  FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, 
  FaPhone, FaEnvelope, FaClock, FaLinkedin, FaGithub 
} from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // simulation
      console.log('Form submitted:', formData);
      alert('Message envoyé avec succès ! Nous vous répondrons sous 24h.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-gray-50">
      <SimpleBanner
        title="Contactez Manhattan Motel"
        subtitle="Nous sommes disponibles pour répondre à vos questions et prendre vos réservations"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          
          {/* Infos de contact */}
          <div className="bg-white p-8 rounded-xl border">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">
              Nos Coordonnées
            </h2>
            
            <div className="space-y-6">
              {/* Adresse */}
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    Localisation: Etoudi<br />
                    Yaoundé, Cameroun
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Téléphone</h3>
                  <p className="text-gray-600">
                    +237 659 407 948<br />
                    +237 672 489 289
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">
                    contact@manhattanmotel.com<br />
                    reservations@manhattanmotel.com
                  </p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaClock className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Horaires</h3>
                  <p className="text-gray-600">
                    Réception ouverte 24h/24<br />
                    Service de chambre: 7h-22h
                  </p>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="pt-4">
                <h3 className="font-semibold text-gray-800 mb-3">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
                    <FaFacebook className="text-2xl" />
                  </Link>
                  <Link href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
                    <FaInstagram className="text-2xl" />
                  </Link>
                  <Link href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
                    <FaWhatsapp className="text-2xl" />
                  </Link>
                  <Link href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
                    <FaLinkedin className="text-2xl" />
                  </Link>
                  <Link href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
                    <FaGithub className="text-2xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 text-gray-800">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
