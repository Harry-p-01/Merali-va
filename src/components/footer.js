import React from 'react';

function Footer() {
  return (
    <footer style={{background: '#111827', color: 'white', padding: '48px 0'}}>
      <div style={{maxWidth: '1152px', margin: '0 auto', padding: '0 16px'}}>

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '32px'}}>

          {/* Left Side */}
          <div>
            <div style={{fontSize: '22px', fontWeight: '700', letterSpacing: '2px'}}>MERALI VA</div>
            <div style={{fontSize: '9px', color: '#94a3b8', letterSpacing: '2px', marginTop: '4px'}}>CONNECTING MARKETS. ELEVATING BUSINESSES</div>

            {/* Social Icons */}
            <div style={{display: 'flex', gap: '12px', marginTop: '24px'}}>
              <a href="https://www.facebook.com/profile.php?id=61576947726557" target="_blank" rel="noreferrer" style={{width: '40px', height: '40px', background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', textDecoration: 'none'}}>f</a>
              <a href="https://www.instagram.com/merali.va?igsh=MXZsNG92M2VmdnBnag==" target="_blank" rel="noreferrer" style={{width: '40px', height: '40px', background: '#db2777', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', textDecoration: 'none'}}>in</a>
              <a href="https://api.whatsapp.com/send?phone=254714411890&text=Hello%2C%20I%20saw%20your%20VA%20services%20website%20and%20I%27m%20interested.%20Could%20you%20please%20share%20your%20service%20packages%20and%20pricing%3F" target="_blank" rel="noreferrer" style={{width: '40px', height: '40px', background: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', textDecoration: 'none'}}>wa</a>
            </div>
          </div>

          {/* Right Side */}
          <div style={{textAlign: 'right'}}>
            <p style={{color: '#94a3b8', fontSize: '14px', marginBottom: '8px'}}>Get in touch</p>
            <a href="mailto:info@merali-va.com" style={{display: 'block', color: 'white', textDecoration: 'none', marginBottom: '8px'}}>info@merali-va.com</a>
            <a href="tel:+84813618795" style={{display: 'block', color: 'white', textDecoration: 'none'}}>+84 813 618 795</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{borderTop: '1px solid #1f2937', marginTop: '40px', paddingTop: '24px', textAlign: 'center'}}>
          <p style={{color: '#6b7280', fontSize: '14px'}}>
            © {new Date().getFullYear()} Merali VA. All rights reserved. Connecting Vietnam & China to Kenya & East Africa.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;