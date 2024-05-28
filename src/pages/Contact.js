import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  margin-bottom: 10px;
`;

const ContactDetail = styled.p`
  margin: 5px 0;
  font-size: 1.2em;
`;

function Contact() {
  return (
    <div className="pageContainer">
      <h1>Contact Us</h1>
      <p>
        The Qsofte team is dedicated to giving great services to our clients.
        Our team's passion, diversity, and creativity make us stand out. We're
        experts and work hard to make our clients successful by helping them be
        more efficient and make positive changes. We work closely with our
        clients to make sure our services fit their needs. Our team offers great
        support to help clients reach their goals and be innovative in their
        industries.
      </p>
    </div>
  );
}

export default Contact;
