'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" size={24} />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-400">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" size={24} />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" size={24} />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-400">New York, NY</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-400 focus:outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
