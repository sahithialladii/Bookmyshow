// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="footer">
//       © 2026 MovieTicket Pro
//     </footer>
//   );
// }

// export default Footer;


import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>MovieTicket Pro</h3>
          <p>
            Book movie tickets online with ease.
            Discover movies, events and entertainment.
          </p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Customer Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

      </div>

      <div className="footer-socials">
        <span>Facebook</span>
        <span>Instagram</span>
        <span>Twitter</span>
        <span>YouTube</span>
      </div>

      <div className="footer-bottom">
        © 2026 MovieTicket Pro. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;