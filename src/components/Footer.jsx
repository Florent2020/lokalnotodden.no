import React from "react";
import styled from "styled-components";
import { MapPin, Heart } from "lucide-react";

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #111827, #1f2937);
  color: white;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (min-width: 640px) {
    padding: 3rem 0.5rem 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconCircle = styled.div`
  width: 2rem;
  height: 2rem;
  background: linear-gradient(to right, #7c3aed, #3b82f6);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
`;

const Text = styled.p`
  color: #d1d5db;
  font-size: 0.875rem;
  margin: 0.25rem 0;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const ContactText = styled.p`
  color: #d1d5db;
  font-size: 0.875rem;
  margin: 0.25rem 0;
`;

const BottomBar = styled.div`
  border-top: 1px solid #374151;
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
`;

const HeartText = styled.p`
  color: #d1d5db;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Grid>
          {/* Left Section */}
          <div>
            <Brand>
              <IconCircle>
                <MapPin size={20} color="white" />
              </IconCircle>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                Notodden Lokalt
              </span>
            </Brand>
            <Text>
              Kobler deg med de beste lokale bedriftene i Notodden. Oppdag,
              utforsk og støtt ditt lokalsamfunn.
            </Text>
          </div>

          {/* Middle Section */}
          <div>
            <SectionTitle>Nyttige lenker</SectionTitle>
            <div style={{ marginTop: "1rem" }}>
              <Text>Alle bedrifter</Text>
              <Text>Legg til din bedrift</Text>
              <Text>Om oss</Text>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <SectionTitle>Kontaktinfo</SectionTitle>
            <div style={{ marginTop: "1rem" }}>
              <ContactText>Notodden, Norge</ContactText>
              <ContactText>support@notoddenlokalt.no</ContactText>
              <ContactText>+47 123 45 678</ContactText>
            </div>
          </div>
        </Grid>

        {/* Bottom Bar */}
        <BottomBar>
          <HeartText>
            <span>Laget med</span>
            <Heart size={16} color="#ef4444" />
            <span>for Notodden-samfunnet</span>
          </HeartText>
        </BottomBar>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
