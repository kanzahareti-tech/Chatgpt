import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Get in Touch</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you!
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1">
          <div className="bg-orange-500 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-orange-100 mb-8">
              Reach out to us through any of these channels or use the contact form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:hello@deliciousbites.com" className="text-orange-100 hover:text-white">
                    hello@deliciousbites.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+1234567890" className="text-orange-100 hover:text-white">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <p className="text-orange-100">
                    San Francisco, CA<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="relative mt-12">
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">Message Sent!</h3>
                <p className="text-stone-600 mb-6">
                  Thanks for reaching out. We'll get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="recipe-question">Recipe Question</option>
                    <option value="collaboration">Collaboration Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="technical">Technical Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-stone-800 text-center mb-8">
          Frequently Asked Questions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-stone-800 mb-2">Can I submit my own recipe?</h3>
            <p className="text-stone-600 text-sm">
              Absolutely! We love featuring community recipes. Send us your recipe through the contact form and we'll review it.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-stone-800 mb-2">How do I subscribe to the newsletter?</h3>
            <p className="text-stone-600 text-sm">
              You can subscribe on our homepage or visit the dedicated newsletter page. It's free!
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-stone-800 mb-2">Can I use your recipes on my blog?</h3>
            <p className="text-stone-600 text-sm">
              Please contact us for permission. We're usually happy to share if you credit us with a link back.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-stone-800 mb-2">Do you offer cooking classes?</h3>
            <p className="text-stone-600 text-sm">
              Yes! We offer both in-person and online cooking classes. Contact us for the current schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
