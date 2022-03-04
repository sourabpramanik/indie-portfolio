import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="contact_page pt-r200">
      <div className="page__container">
        <div className="contact_setion-container">
          <div className="contact_l-section">
            <h1 className="t-heading-600 contact_page">Let's talk</h1>
            <div className="social-container">
              <Link href="/">
                <a>svg</a>
              </Link>            
            </div>
          </div>
          <div className="contact_r-section"></div>
        </div>
      </div>
    </div>
  )
}
export default ContactPage;
