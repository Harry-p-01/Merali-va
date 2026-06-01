import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaFacebookF size={18} />,
    href: 'https://www.facebook.com/profile.php?id=61576947726557',
    bg: '#1877f2', // KEPT original Facebook blue
    label: 'Facebook'
  },
  {
    icon: <FaInstagram size={18} />,
    href: 'https://www.instagram.com/merali.va?igsh=MXZsNG92M2VmdnBnag==',
    bg: '#e1306c',
    label: 'Instagram'
  },
  {
    icon: <FaWhatsapp size={18} />,
    href: 'https://api.whatsapp.com/send?phone=254714411890&text=Hello%2C%20I%20saw%20your%20VA%20services%20website%20and%20I%27m%20interested.%20Could%20you%20please%20share%20your%20service%20packages%20and%20pricing%3F',
    bg: '#25d366',
    label: 'WhatsApp'
  },
];

function Footer() {
  return (
    <footer style={{background: '#4b797b', color: 'white', padding: '64px 0 0'}}>  {/* Changed from #0f172a to #4b797b */}
      <div style={{maxWidth: '1152px', margin: '0 auto', padding: '0 24px'}}>

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '48px', paddingBottom: '48px'}}>

          {/* Left - Brand */}
          <div style={{maxWidth: '300px'}}>
            <div style={{fontSize: '22px', fontWeight: '700', letterSpacing: '2px', color: 'white', marginBottom: '4px'}}>MERALI VA</div>
            <div style={{fontSize: '9px', color: '#d1e8e8', letterSpacing: '2px', marginBottom: '16px'}}>CONNECTING MARKETS. ELEVATING BUSINESSES</div>
            <p style={{color: '#f0f7f7', fontSize: '14px', lineHeight: '1.8', marginBottom: '24px'}}>
              Your dedicated partner bridging the manufacturing powerhouses of Vietnam and China with the growing markets of Kenya and East Africa.
            </p>
            {/* Social Icons */}
            <div style={{display: 'flex', gap: '12px'}}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: social.bg,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <p style={{fontWeight: '700', color: 'white', fontSize: '16px', marginBottom: '20px', letterSpacing: '1px'}}>QUICK LINKS</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' },
                { name: 'Gallery', path: '/gallery' },
              ].map(link => (
                <a key={link.name} href={link.path} style={{color: '#f0f7f7', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s'}}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact Info */}
          <div>
            <p style={{fontWeight: '700', color: 'white', fontSize: '16px', marginBottom: '20px', letterSpacing: '1px'}}>CONTACT US</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <span style={{fontSize: '18px'}}>📍</span>
                <p style={{color: '#f0f7f7', fontSize: '14px', lineHeight: '1.6'}}>Nairobi, Kenya<br/>East Africa & Southeast Asia</p>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <span style={{fontSize: '18px'}}>✉️</span>
                <a href="mailto:info@merali-va.com" style={{color: '#f0f7f7', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s'}}>
                  info@merali-va.com
                </a>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <span style={{fontSize: '18px'}}>📞</span>
                <a href="tel:+84813618795" style={{color: '#f0f7f7', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s'}}>
                  +84 813 618 795
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{borderTop: '1px solid #3d6b6d', padding: '24px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px'}}>
          <p style={{color: '#e0efef', fontSize: '13px'}}>
            © {new Date().getFullYear()} Merali VA. All rights reserved.
          </p>
          <p style={{color: '#e0efef', fontSize: '13px'}}>
            Connecting Vietnam & China to Kenya & East Africa 🌍
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;