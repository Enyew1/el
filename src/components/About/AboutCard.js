import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Enyew Luel </span>
            from <span className="purple"> Bahirdar, Ethiopia.</span>
            <br />I am a COMPUTER SCIENCE student third year at the university
            of the people.
            <br />
            <br />
            In addition to coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Technical works like maintenance
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Visiting Natural features like lakes, forests,
              waterfalls
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">ENYEW</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
