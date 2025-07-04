"use client"
import React, { useState } from "react";
import "./Footer.css";

const MobileFooterSection = ({ title, children, noAccordion = false }) => {
  const [isOpen, setIsOpen] = useState(noAccordion);

  return (
    <div className={`mobile-footer-section ${noAccordion ? "no-accordion" : ""}`}>
      <div
        className="section-header"
        onClick={() => !noAccordion && setIsOpen(!isOpen)}
      >
        <h3>{title}</h3>
        {!noAccordion && (
          <span className={`arrow ${isOpen ? "arrow-up" : ""}`}>
            ▼
          </span>
        )}
      </div>
      <div className={`section-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="desktop-footer">
        <div className="upper-footer">
          <div className="newsletter">
            <h4>BE THE FIRST TO KNOW</h4>
            <p style={{ fontSize: "15px", padding: "30px 0px" }}>
              Sign up for updates from mettā muse.
            </p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="contact-info">
            <h4>CONTACT US</h4>
            <p style={{ fontSize: "13px", padding: "10px 0px 10px 0px" }}>
              +44 221 133 5360
            </p>
            <p style={{ marginBottom: "5px", fontSize: "13px" }}>customercare@mettamuse.com</p>
            <h3 style={{ fontSize: "15px", padding: "10px 0px 10px 0px" }}>
              CURRENCY
            </h3>
            <div className="currency-div">
              <img
                className="currency"
                src="/assets/images/United States of America (US).png"
                alt="US Flag"
                width={20}
                height={20}
              />
              <img src="/assets/images/Star 1.png" alt="Star Img" />
              <span>USD</span>
            </div>
            <p className="currency-note">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <div className="lower-footer">
          <div className="company-info">
            <h4>mettā muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="quick-links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="social-and-payment">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <img src="/assets/images/Insta.png" alt="Instagram" width={30} height={25} />
              <img src="/assets/images/a.png" alt="LinkedIn" width={30} height={25} />
            </div>
            <h3>mettā muse ACCEPTS</h3>
            <div className="payment-icons">
              <img src="/assets/images/Group 136188.png" alt="Google Pay" width={40} height={25} />
              <img src="/assets/images/Group 136190.png" alt="Mastercard" width={40} height={25} />
              <img src="/assets/images/Group 136192.png" alt="PayPal" width={40} height={25} />
              <img src="/assets/images/Group 136193.png" alt="American Express" width={40} height={25} />
              <img src="/assets/images/Group 136194.png" alt="Apple Pay" width={40} height={25} />
              <img src="/assets/images/Group 136195.png" alt="D Pay" width={40} height={25} />
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-footer">
        <MobileFooterSection title="BE THE FIRST TO KNOW" noAccordion={true}>
          <p className="newsletter-text">
            Sign up for updates from mettā muse.
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your Email..." />
            <button>SUBSCRIBE</button>
          </div>
        </MobileFooterSection>

        <div className="call-us">
          <h3>CALL US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>

        <div className="currency">
          <h3>CURRENCY</h3>
          <div className="currency-div">
            <img src="/assets/images/United States of America (US).png" alt="US Flag" width={20} height={15} />
            <img src="/assets/images/Star 1.png" alt="Star Img" />
            <span>USD</span>
          </div>
        </div>

        <MobileFooterSection title="mettā muse">
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </MobileFooterSection>

        <MobileFooterSection title="QUICK LINKS">
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </MobileFooterSection>

        <MobileFooterSection title="FOLLOW US">
          <div className="social-icons">
            <img src="/assets/images/Insta.png" alt="Instagram" width={30} height={25} />
            <img src="/assets/images/a.png" alt="LinkedIn" width={30} height={25} />
          </div>
        </MobileFooterSection>

        <div className="payment-section">
          <h3>mettā muse ACCEPTS</h3>
          <div className="payment-icons">
            <img src="/assets/images/Group 136188.png" alt="Google Pay" />
            <img src="/assets/images/Group 136190.png" alt="Mastercard" />
            <img src="/assets/images/Group 136192.png" alt="PayPal" />
            <img src="/assets/images/Group 136193.png" alt="American Express" />
            <img src="/assets/images/Group 136194.png" alt="Apple Pay" />
            <img src="/assets/images/Group 136195.png" alt="D Pay" />
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
