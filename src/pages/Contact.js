import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_577j2bj',
        'template_5psqabh',
        formData,
        '8gu1lPmtDFnDwVGni'
      );
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly at info@merali-va.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{paddingTop: '80px'}}>

      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)', padding: '80px 16px', textAlign: 'center'}}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{color: '#2563eb', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px'}}
        >
          Get In Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{fontSize: '48px', fontWeight: '700', color: '#1e293b', marginBottom: '24px', lineHeight: '1.2'}}
        >
          Let's Start Your <span style={{color: '#2563eb'}}>Sourcing Journey</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8'}}
        >
          For any inquiry, get in touch with our team. We typically respond within 24 hours.
        </motion.p>
      </section>

      {/* Contact Content */}
      <section style={{padding: '80px 16px', background: 'white'}}>
        <div style={{maxWidth: '1152px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '48px'}}>

          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{flex: '1', minWidth: '280px'}}
          >
            <h2 style={{fontSize: '28px', fontWeight: '700', color: '#1e293b', marginBottom: '32px'}}>Contact Information</h2>

            <div style={{display: 'flex', gap: '16px', marginBottom: '32px', alignItems: 'flex-start'}}>
              <div style={{width: '48px', height: '48px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0}}>📍</div>
              <div>
                <p style={{fontWeight: '700', color: '#1e293b', marginBottom: '4px'}}>Our Location</p>
                <p style={{color: '#64748b', lineHeight: '1.6'}}>Nairobi, Kenya<br/>Operating across East Africa & Southeast Asia</p>
              </div>
            </div>

            <div style={{display: 'flex', gap: '16px', marginBottom: '32px', alignItems: 'flex-start'}}>
              <div style={{width: '48px', height: '48px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0}}>✉️</div>
              <div>
                <p style={{fontWeight: '700', color: '#1e293b', marginBottom: '4px'}}>Email Us</p>
                <a href="mailto:info@merali-va.com" style={{color: '#2563eb', textDecoration: 'none', fontSize: '16px'}}>info@merali-va.com</a>
              </div>
            </div>

            <div style={{display: 'flex', gap: '16px', marginBottom: '48px', alignItems: 'flex-start'}}>
              <div style={{width: '48px', height: '48px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0}}>📞</div>
              <div>
                <p style={{fontWeight: '700', color: '#1e293b', marginBottom: '4px'}}>Call Us</p>
                <a href="tel:+84813618795" style={{color: '#2563eb', textDecoration: 'none', fontSize: '16px'}}>+84 813 618 795</a>
              </div>
            </div>

            <div>
              <p style={{fontWeight: '700', color: '#1e293b', marginBottom: '16px', fontSize: '18px'}}>Follow Us</p>
              <div style={{display: 'flex', gap: '12px'}}>
                <a href="https://www.facebook.com/profile.php?id=61576947726557" target="_blank" rel="noreferrer" style={{width: '48px', height: '48px', background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px'}}>f</a>
                <a href="https://www.instagram.com/merali.va?igsh=MXZsNG92M2VmdnBnag==" target="_blank" rel="noreferrer" style={{width: '48px', height: '48px', background: '#db2777', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px'}}>in</a>
                <a href="https://api.whatsapp.com/send?phone=254714411890&text=Hello%2C%20I%20saw%20your%20VA%20services%20website%20and%20I%27m%20interested.%20Could%20you%20please%20share%20your%20service%20packages%20and%20pricing%3F" target="_blank" rel="noreferrer" style={{width: '48px', height: '48px', background: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px'}}>wa</a>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{flex: '2', minWidth: '300px'}}
          >
            {submitted ? (
              <div style={{textAlign: 'center', padding: '80px 32px', background: '#eff6ff', borderRadius: '16px'}}>
                <div style={{fontSize: '64px', marginBottom: '16px'}}>🎉</div>
                <h3 style={{fontSize: '28px', fontWeight: '700', color: '#1e293b', marginBottom: '12px'}}>Message Sent!</h3>
                <p style={{color: '#64748b', fontSize: '16px'}}>Thank you for reaching out. We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <div style={{background: '#f8fafc', borderRadius: '16px', padding: '40px'}}>
                <h3 style={{fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '32px'}}>Send Us a Message</h3>

                {error && (
                  <div style={{background: '#fee2e2', color: '#dc2626', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px'}}>
                    {error}
                  </div>
                )}

                <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                  <div>
                    <label style={{display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px'}}>Full Name</label>
                    <input
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      style={{width: '100%', padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '16px', background: 'white', boxSizing: 'border-box'}}
                    />
                  </div>
                  <div>
                    <label style={{display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px'}}>Email Address</label>
                    <input
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      style={{width: '100%', padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '16px', background: 'white', boxSizing: 'border-box'}}
                    />
                  </div>
                  <div>
                    <label style={{display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px'}}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Product Sourcing Inquiry"
                      required
                      style={{width: '100%', padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '16px', background: 'white', boxSizing: 'border-box'}}
                    />
                  </div>
                  <div>
                    <label style={{display: 'block', fontWeight: '600', color: '#374151', marginBottom: '8px'}}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your sourcing needs..."
                      required
                      rows={5}
                      style={{width: '100%', padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '16px', background: 'white', boxSizing: 'border-box', resize: 'vertical'}}
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{background: loading ? '#93c5fd' : '#2563eb', color: 'white', padding: '14px 32px', borderRadius: '32px', fontSize: '16px', fontWeight: '600', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '8px', transition: 'all 0.3s ease'}}
                  >
                    {loading ? 'Sending...' : 'Send Message ✉️'}
                  </button>
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default Contact;