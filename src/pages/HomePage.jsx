import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Search, MapPin, Star, Users, Clock } from "lucide-react";
import BusinessCard from "../components/BusinessCard";
import { businesses } from "../data/businesses";
import AttractionsSection from "../components/AttractionsSection";

// Floating animation for decorative elements
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// ---------------- Styled Components ---------------- //

const Container = styled.div`
  min-height: 100vh;
  font-family: "Segoe UI", sans-serif;
`;

const HeroSection = styled.section`
  position: relative;
  padding: 5rem 1rem;
  background: linear-gradient(to bottom right, #7c3aed, #2563eb, #4f46e5);
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
`;

const FloatingCircle = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  animation: ${float} 6s ease-in-out infinite;
  ${({ $top, $left, $right, $bottom, $size, $delay }) => `
  top: ${$top};
  left: ${$left};
  right: ${$right};
  bottom: ${$bottom};
  width: ${$size};
  height: ${$size};
  animation-delay: ${$delay};
`}
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
  color: white;

  p {
    max-width: 750px;
    margin: 0 auto;
  }
`;

const GradientText = styled.span`
  display: block;
  background: linear-gradient(to right, #facc15, #fb923c);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledInputWrapper = styled.div`
  position: relative;
  max-width: 640px;
  margin: 2rem auto;
`;

const StyledInput = styled.input`
  padding: 1rem 1rem 1rem 3rem;
  font-size: 1.125rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  border: none;
  width: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: #9ca3af;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 768px;
  margin: 2rem auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  color: white;
  text-align: center;
`;

const CategorySection = styled.section`
  background: rgba(255, 255, 255, 0.5);
  padding: 2rem 1rem;

  & > .category--business {
    max-width: 1100px;
    margin: 0 auto;

    backdrop-filter: blur(10px);
    text-align: center;
  }
`;

const CategoryButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  border: ${({ $active }) => ($active ? "none" : "1px solid #a78bfa")};
  background: ${({ $active }) =>
    $active ? "linear-gradient(to right, #7c3aed, #2563eb)" : "#ffffff"};
  color: ${({ $active }) => ($active ? "white" : "#7c3aed")};
  margin: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: ${({ $active }) =>
    $active ? "0 0 8px rgba(124, 58, 237, 0.5)" : "none"};
`;

const BusinessGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CallToActionSection = styled.section`
  background: linear-gradient(to right, #7c3aed, #2563eb);
  padding: 5rem 1rem;
  text-align: center;
  color: white;
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  background: white;
  color: #7c3aed;
  border-radius: 9999px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #f3f4f6;
  }
`;

// ---------------- Main Component ---------------- //

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const categories = ["Alle", ...new Set(businesses.map((b) => b.category))];

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Alle" || business.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: Users, label: "Lokale Bedrifter", value: businesses.length },
    { icon: Star, label: "Gj.snittlig Vurdering", value: "4.7" },
    { icon: MapPin, label: "Steder", value: "Notodden" },
    { icon: Clock, label: "Oppdatert", value: "Daglig" },
  ];

  return (
    <Container>
      <HeroSection>
        <Overlay />
        <FloatingCircle $top="5rem" $left="2.5rem" $size="5rem" />
        <FloatingCircle $top="10rem" $right="5rem" $size="4rem" $delay="2s" />
        <FloatingCircle $bottom="5rem" $left="25%" $size="3rem" $delay="4s" />

        <Content>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading>
              Oppdag
              <GradientText>Notoddens Beste</GradientText>
              Lokale Bedrifter
            </Heading>
            <p
              style={{
                fontSize: "1.25rem",
                opacity: 0.9,
                marginBottom: "2rem",
              }}
            >
              Fra koselige kafeer til dyktige håndverkere, utforsk hjertet av
              vårt lokalsamfunn og støtt lokale grundere som gjør Notodden
              spesiell.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <StyledInputWrapper>
              <IconWrapper>
                <Search size={20} />
              </IconWrapper>
              <StyledInput
                type="text"
                value={searchTerm}
                aria-label="Søk etter bedrifter, tjenester eller kategorier..."
                placeholder="Søk etter bedrifter, tjenester eller kategorier..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </StyledInputWrapper>
          </motion.div>

          <StatsGrid
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <StatCard key={index}>
                <stat.icon
                  size={32}
                  style={{ marginBottom: "0.5rem", color: "#facc15" }}
                />
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.875rem", opacity: 0.8 }}>
                  {stat.label}
                </div>
              </StatCard>
            ))}
          </StatsGrid>
        </Content>
      </HeroSection>

      <CategorySection>
        <div className="category--business">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              $active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </div>
      </CategorySection>

      <section style={{ padding: "4rem 1rem" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Utvalgte Lokale Bedrifter
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                textAlign: "center",
                color: "#4b5563",
                marginBottom: "3rem",
              }}
            >
              Oppdag fantastiske lokale bedrifter som får samfunnet vårt til å
              blomstre.
            </p>
          </motion.div>

          {filteredBusinesses.length > 0 ? (
            <BusinessGrid>
              {filteredBusinesses.map((business, index) => (
                <BusinessCard
                  key={business.id}
                  business={business}
                  index={index}
                />
              ))}
            </BusinessGrid>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: "center", padding: "4rem 0" }}
            >
              <div
                style={{
                  width: "96px",
                  height: "96px",
                  margin: "0 auto 1.5rem",
                  background: "#f3f4f6",
                  borderRadius: "50%",
                }}
              >
                <Search
                  size={48}
                  style={{ margin: "1.5rem auto", color: "#9ca3af" }}
                />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                Ingen bedrifter funnet
              </h3>
              <p style={{ color: "#6b7280" }}>
                Prøv å justere søket eller kategorifilteret.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <CallToActionSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Eier du en bedrift i Notodden?
          </h2>
          <p
            style={{ fontSize: "1.125rem", marginBottom: "2rem", opacity: 0.9 }}
          >
            Bli med i vårt voksende fellesskap og nå flere kunder.
          </p>
          <CTAButton
            onClick={() =>
              alert("🚧 Denne funksjonen er ikke implementert ennå.")
            }
          >
            Legg til din bedrift
          </CTAButton>
        </motion.div>
      </CallToActionSection>
      <AttractionsSection />
    </Container>
  );
};

export default HomePage;
