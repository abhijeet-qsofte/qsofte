import React from 'react';
import { Link } from 'react-router-dom';
import Clients from '../components/Clients';
import Services from './Services';
import { StickyFooter } from '../GlobalStyle.js';

import {
  Heading,
  HeroSection,
  CallToActionButton,
  PageContainer,
  Subheading,
  Paragraph,
} from '../GlobalStyle.js';

function Home() {
  return (
    <>
      <HeroSection>
        <Heading>Your Technology Partner</Heading>
      </HeroSection>

      <PageContainer>
        <Subheading font="2">Innovate. Elevate. Excel.</Subheading>
        <Paragraph>
          At Qsofte, our passion for excellence transforms your business
          challenges into success stories. We blend creativity, diversity, and
          expertise to deliver personalized solutions that not only meet but
          exceed your expectations.
        </Paragraph>
        <StickyFooter>
          <Clients></Clients>
        </StickyFooter>
      </PageContainer>
    </>
  );
}

export default Home;
