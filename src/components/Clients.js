// src/components/Clients.js
import React from 'react';
import styled from 'styled-components';

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
  max-width: 100px; // Adjust based on actual logo sizes
  height: auto;
  filter: grayscale(100%); // Makes the logos monochrome
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0);
  }
`;

const Clients = () => {
  return (
    <ClientsSection>
      <SectionTitle>Our Clients</SectionTitle>
      <ClientsList>
        {/* Repeat ClientLogo for each client */}
        <ClientLogo src="path/to/client-logo1.png" alt="Client Name 1" />
        <ClientLogo src="path/to/client-logo2.png" alt="Client Name 2" />
        {/* Add more as needed */}
      </ClientsList>
    </ClientsSection>
  );
};

export default Clients;
