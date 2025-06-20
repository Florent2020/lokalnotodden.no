import React from "react";
import { useParams, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { attractions } from "../data/attractions";
import { MapPin, Clock, Sparkles } from "lucide-react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// const Page = styled.div`
//   padding: 3rem 1rem;
//   padding-top: 5rem; /* 👈 if Navbar is fixed */
//   background: linear-gradient(to bottom, #fdfbfb, #ebedee);
//   min-height: 100vh;
// `;

const Page = styled.main`
  padding: 3rem 1rem 4rem;
  /* margin-top: 4rem; 
  background: linear-gradient(to bottom, #fdfbfb, #ebedee); */
  min-height: 100vh;
  scroll-behavior: smooth;
`;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  background: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1.5rem;
  color: #6366f1;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #4338ca;
    text-decoration: underline;
  }
`;

const Banner = styled.img`
  width: 100%;
  max-height: 550px;
  height: 470px; /* 👈 helps avoid layout shift */
  object-fit: cover;
  border-radius: 1.25rem;
  margin-bottom: 2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const Category = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  background: #eef2ff;
  color: #4f46e5;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #1f2937;
  word-break: break-word; // 💡 allow long words to wrap
  overflow-wrap: break-word; // 💡 break long words if needed
  hyphens: auto; // 💡 optional: allow hyphenation on supported browsers

  @media (max-width: 480px) {
    font-size: 1.55rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 2.5rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const InfoBox = styled.div`
  background: #f9fafb;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  color: #6366f1;
  margin-top: 0.2rem;
`;

const InfoContent = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
`;

const InfoText = styled.p`
  font-size: 0.95rem;
  color: #374151;
`;

const List = styled.ul`
  padding-left: 1rem;
  list-style-type: disc;
  color: #374151;
  font-size: 0.95rem;
`;

const MapBox = styled.div`
  margin-top: 2rem;
`;

const Map = styled.iframe`
  width: 100%;
  height: 450px;
  border: none;
  border-radius: 1rem;

  @media (max-width: 480px) {
    height: 280px;
  }
`;

const AttractionDetailPage = () => {
  const { slug } = useParams();
  const attraction = attractions.find((item) => item.slug === slug);

  if (!attraction) return <p>Attraksjon ikke funnet.</p>;

  const mapEmbedUrl =
    attraction.mapUrl ||
    `https://www.google.com/maps?q=${encodeURIComponent(
      attraction.address
    )}&output=embed`;

  return (
    <Page>
      <Container>
        <BackLink to="/attraksjoner" className="back--button__detail--page">
          ← Tilbake til oversikt
        </BackLink>
        <Banner src={attraction.imageUrl} alt={attraction.title} />

        <TitleWrapper>
          <Category>{attraction.category}</Category>
          <Title>{attraction.title}</Title>
        </TitleWrapper>

        <Description>{attraction.description}</Description>

        <InfoGrid>
          <InfoBox>
            <IconWrapper>
              <MapPin size={20} />
            </IconWrapper>
            <InfoContent>
              <InfoTitle>Adresse</InfoTitle>
              <InfoText>{attraction.address || "Ikke oppgitt"}</InfoText>
            </InfoContent>
          </InfoBox>

          <InfoBox>
            <IconWrapper>
              <Clock size={20} />
            </IconWrapper>
            <InfoContent>
              <InfoTitle>Åpningstider</InfoTitle>
              <InfoText>{attraction.hours || "Ikke oppgitt"}</InfoText>
            </InfoContent>
          </InfoBox>

          {attraction.highlights && attraction.highlights.length > 0 && (
            <InfoBox>
              <IconWrapper>
                <Sparkles size={20} />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Høydepunkter</InfoTitle>
                <List>
                  {attraction.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </List>
              </InfoContent>
            </InfoBox>
          )}
        </InfoGrid>

        <MapBox>
          <InfoTitle>Kart</InfoTitle>
          <Map
            src={mapEmbedUrl}
            loading="lazy"
            title="Kart over attraksjonen"
          />
        </MapBox>
      </Container>
    </Page>
  );
};

export default AttractionDetailPage;
