import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Linkedin, Github, FileUser } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";
import './contact.css';
import cvPDF from '../assets/CVPrakashSwami.pdf';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! Check console for form data.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: MapPin, title: 'Address', detail: 'Pune, Maharashtra, India' },
    { icon: Phone, title: 'Contact', detail: '+91 8767690131' },
    { icon: Mail, title: 'Email us', detail: 'prakashswami150569@gmail.com' }
  ];
const socialMedia = [
  { icon: Linkedin, link: "https://www.linkedin.com/in/prakash-swami/" },
  {icon: SiLeetcode, link: "https://leetcode.com/u/sprakash_001/"},
  { icon: Github, link: "https://github.com/sprakash2006" },
  {icon: FileUser, link: cvPDF},
  { icon: Instagram, link: "https://www.instagram.com/prakash.x45/" }
];

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <p className="contact-details-name">Get in Touch !</p>
        <div className="contact-grid">
          {/* Left sidebar - Contact Info */}
          <div className="contact-sidebar">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="contact-card">
                <div className="contact-card-content">
                  <div className="contact-icon-wrapper">
                    <item.icon className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <h3 className="contact-title">{item.title}</h3>
                    <p className="contact-detail">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
              <div className="contact-social-card">
                {socialMedia.map((item) => (
                  <div className="contact-social-card-content" key={item.icon}>
                    <div className="contact-social-icon-wrapper" onClick={() => window.open(item.link, "_blank")}>
                      <item.icon className="contact-social-icon" />
                    </div>
                  </div>
                ))}
              </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-card">
              <div className="contact-form-header">
                <p className="contact-form-description">Have a project in mind or need help with web development or data analytics? Drop your details below, and I’ll get in touch soon to discuss how we can work together.</p>
              </div>

              <div className="contact-form-fields">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="contact-input"
                    />
                  </div>
                </div>
              
                <div className="contact-form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="contact-input"
                  />
                </div>

                <div className="contact-form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message..."
                    rows="4"
                    className="contact-textarea"
                  ></textarea>
                </div>

                <button onClick={handleSubmit} className="contact-submit-btn">
                  <Send className="contact-btn-icon" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}