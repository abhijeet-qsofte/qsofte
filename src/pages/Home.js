import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { darken, lighten } from 'polished';
import backgroundImage from '../assets/hero-3.jpg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.light};
  min-height: 100vh;
  text-align: justify;
`;

const Heading = styled.h1`
  color: ${({ theme }) => lighten(0.1, theme.colors.secondary)};
  font-size: 3.5rem;
  margin-top: 150px;
  margin-bottom: 20px;
  margin-left: 35px;
  text-align: center;
  align-self: flex-start;
  font-weight: bolder;
`;

const Subheading = styled.h2`
  color: #333;
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 30px;
  text-align: center;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  width: 70%;
  margin-left: 15%;
  line-height: 1.8;
  font-size: 1.3rem;
  font-weight: semi bold;
`;

const Highlight = styled.span`
  color: #1976d2;
`;

const CallToActionButton = styled(Button)`
  && {
    margin-top: 30px;
    padding: 10px 30px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => lighten(0.1, theme.colors.secondary)};
    }
  }
`;
const HeroSection = styled.section`
  background-image: url(${backgroundImage});
  color: white;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //height: 100vh;
`;
const ImageSection = styled.section`
  width: 50%;
  height: 500px; // Adjust as needed
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: right;
`;

function Home() {
  return (
    <>
      <HeroSection>
        <Heading>Your Trusted Technology Partner</Heading>
        <Subheading></Subheading>
        <CallToActionButton
          variant="contained"
          size="large"
          as={Link}
          to="/services"
        >
          Learn More
        </CallToActionButton>
      </HeroSection>

      <PageContainer>
        <Paragraph>
          The Qsofte team is dedicated to giving great services to our clients.
          Our team's passion, diversity, and creativity make us stand out. We're
          experts and work hard to make our clients successful by helping them
          be more efficient and make positive changes. We work closely with our
          clients to make sure our services fit their needs. Our team offers
          great support to help clients reach their goals and be innovative in
          their industries.
        </Paragraph>
      </PageContainer>
    </>
  );
}

export default Home;
