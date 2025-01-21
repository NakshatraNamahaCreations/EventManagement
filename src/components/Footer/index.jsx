import React from "react";
import "./styles.scss"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>Nithya</h3>
          <p>
            Are you planning an important party or event? When it comes to
            making an occasion as special as possible, you want every detail to
            be perfect.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Address</h3>
          <p>
            <strong>Address:</strong> 52 Great Av, New York
          </p>
          <p>
            <strong>Phone:</strong> 0541 669 333
          </p>
          <p>
            <strong>Email:</strong> contact@example.com
          </p>
          <p>
            <strong>Social Media:</strong> Facebook, Twitter
          </p>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li>ONLINE PAYMENTS</li>
            <li>GIFT CARDS</li>
            <li>RETURN POLICY</li>
            <li>FURNITURE ASSEMBLING</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Shopping</h3>
          <ul>
            <li>ONLINE PAYMENTS</li>
            <li>GIFT CARDS</li>
            <li>RETURN POLICY</li>
            <li>FURNITURE ASSEMBLING</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Nithya.com</p>
      </div>
    </footer>
  );
};

export default Footer;
