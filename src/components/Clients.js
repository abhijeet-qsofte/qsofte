// src/components/Clients.js
import React from 'react';
import styled from 'styled-components';
import westpaclogo from '../assets/client-logo/westpaclogo.png';
import atmabodhlogo from '../assets/client-logo/atmabodhlogo.png';
import chillimasalalogo from '../assets/client-logo/chillimasalalogo.png';
import adyopantlegallogo from '../assets/client-logo/adyopantlegallogo.png';

const ClientsSection = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large} 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const ClientsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const ClientLogo = styled.img`
  max-width: 225px; // Adjust based on actual logo sizes
  height: 220px;
  object-fit: contain;
  //filter: grayscale(100%); // Makes the logos monochrome
  //transition: filter 0.3s ease;

  //  &:hover {
  //   filter: grayscale(10);
  // }
`;

const Clients = () => {
  return (
    <ClientsSection>
      <SectionTitle>Our Clients</SectionTitle>
      <ClientsList>
        {/* Repeat ClientLogo for each client */}
        <ClientLogo src={westpaclogo} alt="Westpac" />
        <ClientLogo src={chillimasalalogo} alt="Westpac" />
        <ClientLogo src={adyopantlegallogo} alt="Westpac" />
        <ClientLogo src={atmabodhlogo} alt="Westpac" />

        {/* Add more as needed */}
      </ClientsList>
    </ClientsSection>
  );
};

export default Clients;
