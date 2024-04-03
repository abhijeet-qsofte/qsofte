import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container, Collapse } from '@mui/material';
import styled from 'styled-components';
import technologyConsultancyImage from '../assets/img-services/consultancy.jpeg';
import posImage from '../assets/img-services/pos.jpeg';
import webDevelopmentImage from '../assets/img-services/webdevelopment.jpeg';
import openEmrImage from '../assets/img-services/openemr.jpeg';
import paymentsSMEImage from '../assets/img-services/payments.jpeg';
import testingImage from '../assets/img-services/testing.jpeg';
import { darken, lighten } from 'polished';

const CustomContainer = styled(Container)`
  margin-top: 10px;
  padding-top: 60px;
  @media (max-width: 600px) {
    padding-top: 20px; // Adjust padding for small screens
  }
`;
const Heading = styled.h1`
  color: ${({ theme }) => darken(0.2, theme.colors.secondary)};
  font-size: 1.5;
  text-align: center;
  align-self: flex-start;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 1.5rem; // Adjust font size for small screens
    margin-left: 10px; // Adjust margin for small screens
  }
`;
const ServiceCard = styled(Card)`
  display: flex; /* This makes the card flex container */
  margin: 20px 0;
  align-items: center; /* Aligns items vertically in the center */
  width: 100%; /* Sets the width to 75% of the screen */
  margin-left: auto; /* Centers the card horizontally */
  margin-right: auto;

  &:nth-child(even) {
    flex-direction: row;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
  @media (max-width: 600px) {
    // Adjusts layout for screens narrower than 600px
    flex-direction: column !important; // Stacks the media and content vertically on small screens
    width: 100%; // Sets the width to 100% on small screens
  }
`;

const CardContentFlex = styled(CardContent)`
  flex: 1; /* Allows the content to fill the available space */
  background-color: white;

  @media (max-width: 600px) {
    padding: 0 0 0; // Adds padding for better readability on small screens
  }
`;

function Services() {
  const services = [
    {
      title: 'Technology Consultancy',
      description: [
        "Expert Guidance: Streamline your tech journey with Qsofte's seasoned consultants.",
        'Innovative Solutions: Harness the latest technologies to elevate your business.',
        'Enhanced Efficiency: Optimize operations for peak performance.',
        'Strategic Exploration: Uncover and seize new technological opportunities.',
        'Empowerment: Make informed decisions that propel progress.',
        'Dynamic Transformation: Partner with Qsofte for a future-proof digital evolution.',
      ],
      imageUrl: technologyConsultancyImage,
      alt: 'Technology Consultancy',
    },
    {
      title: 'Retail POS Solutions',
      description:
        'In the fast-paced retail environment, efficiency and customer satisfaction are paramount...',
      imageUrl: posImage,
      alt: 'Retail POS Solutions',
    },
    {
      title: 'Website and App Development',
      description:
        'Your online presence is a critical component of your business success...',
      imageUrl: webDevelopmentImage,
      alt: 'Website and App Development',
    },
    {
      title: 'OpenEMR Solutions',
      description:
        'In the healthcare industry, managing medical records efficiently while ensuring compliance...',
      imageUrl: openEmrImage,
      alt: 'OpenEMR Solutions',
    },
    {
      title: 'SME Expertise in Payments',
      description:
        'For small and medium-sized enterprises (SMEs), navigating the complexities of payment systems...',
      imageUrl: paymentsSMEImage,
      alt: 'SME Expertise in Payments',
    },
    {
      title: 'Testing Services',
      description:
        'Delivering high-quality software products demands rigorous testing...',
      imageUrl: testingImage,
      alt: 'Testing Services',
    },
  ];

  const [expanded, setExpanded] = useState(services.map(() => false));

  const handleExpandClick = (i) => {
    setExpanded(expanded.map((x, j) => (i === j ? !x : x)));
  };
  return (
    <CustomContainer maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Our Services
      </Typography>
      <Typography paragraph>
        From bespoke software development to cloud services and beyond, Qsofte
        offers a comprehensive range of services designed to empower your
        business...
      </Typography>

      {services.map((service, index) => (
        <ServiceCard key={index} onClick={() => handleExpandClick(index)}>
          <CardMedia
            component="img"
            height={expanded[index] ? '480' : '240'}
            image={service.imageUrl}
            alt={service.alt}
            style={{
              width: '420px', // Adjust width as needed
              transition: 'height 0.3s ease-in-out',
            }}
          />
          <CardContentFlex>
            <Heading>{service.title}</Heading>
            <Collapse in={expanded[index]}>
              <Typography variant="h5" color="">
                {service.description}
              </Typography>
            </Collapse>
          </CardContentFlex>
        </ServiceCard>
      ))}
    </CustomContainer>
  );
}
export default Services;
