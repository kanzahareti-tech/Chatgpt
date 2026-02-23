import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - HotEasyRecipes',
  description: 'Get in touch with the HotEasyRecipes team. We\'d love to hear from you!',
};

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-12">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-stone-600 text-center max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you!
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">Email</h3>
                    <p className="text-stone-600">hello@hoteasyrecipes.com</p>
                    <p className="text-stone-500 text-sm">We reply within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">Location</h3>
                    <p className="text-stone-600">San Francisco, CA</p>
                    <p className="text-stone-500 text-sm">United States</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-stone-200">
                <h3 className="font-medium text-stone-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Instagram', 'Twitter', 'Pinterest'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                      aria-label={social}
                    >
                      <span className="sr-only">{social}</span>
                      {social.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="mt-6 bg-stone-100 rounded-xl p-6">
              <h3 className="font-medium text-stone-900 mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-stone-600 text-sm mb-4">
                Check our FAQ page for quick answers to common questions.
              </p>
              <a href="/faq" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                View FAQ →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
