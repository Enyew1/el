import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Enyew Luel</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>
            Copyright © {year} <span className="purple">ENYEW</span>
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Enyew1"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/enyew-luel-381205249/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100072992395771"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
