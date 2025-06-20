import React, { useEffect, useState } from "react"; // Add useState
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Star,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { businesses } from "../data/businesses";
import { toast } from "../components/ui/use-toast";
import styled from "styled-components";

import GalleryLightbox from "../components/GalleryLightbox";

// === Styled Components ===

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f8fafc;
`;

const Section = styled.section`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: auto;
  /* background-color: #fbfbfd; */
`;

const ActionButton = styled.button`
  background: transparent;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  padding: 0.5rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: start;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  min-width: 300px;

  img {
    height: 24rem;
    object-fit: cover;
    object-position: 50% 15%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-top: 2rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0.5rem 0 1.5rem 0;
`;

const Description = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const CallButton = styled.button`
  background: #22c55e;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }
`;

const EmailButton = styled.button`
  background: transparent;
  color: #9333ea;
  border: 2px solid #e9d5ff;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #faf5ff;
  }
`;

const WebsiteButton = styled.button`
  background: transparent;
  color: #2563eb;
  border: 2px solid #bfdbfe;
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #f0f9ff;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 17%);
  margin-bottom: 1rem;

  /* p:nth-of-type(1) svg {
    color: #9333ea !important;
  } */
`;

const DayRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background: ${(props) => (props.$highlight ? "#f3e8ff" : "transparent")};
  border-radius: 0.5rem;
`;

const FlexGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Booking = styled.div`
  padding: 2rem 0;
  max-width: 1200px;
  margin: auto;
`;

const BookingContainer = styled.div`
  margin-top: 2rem;
  background: linear-gradient(to right, #9333ea, #3b82f6);
  padding: 1.5rem;
  border-radius: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    background: white;
    color: #9333ea;
    padding: 0.75rem;
    border-radius: 9999px;
    border: none;
    font-weight: 500;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;

    &:hover {
      opacity: 0.95;
    }
  }
`;

const ServicesSpecialtiesWrapper = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 220px;

  h4 {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #111827;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 1rem;
    color: #1f2937;
  }

  svg {
    flex-shrink: 0;
  }
`;

const ContactCard = styled(InfoCard)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: #ffffff;
  box-shadow: 0 0 10px rgb(0 0 0 / 17%);
`;

const ContactRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const IconWrapper = styled.div`
  margin-top: 0.15rem;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-weight: 600;
    color: #111827;
    font-size: 0.95rem;
  }

  span {
    font-size: 0.95rem;
    color: #4b5563;
  }
`;

const GalleryImageWrapper = styled(motion.div)`
  border-radius: 1rem;
  overflow: hidden;
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 256px;
    object-fit: cover;
    border-radius: 1rem;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
`;

// === Main Component ===
const BusinessPage = () => {
  const { slug } = useParams();
  const business = businesses.find((b) => b.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const days = [
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
    "Søndag",
  ];
  const currentDay = new Date().getDay();

  const handleContact = (type) => {
    const messages = {
      phone: "telefon",
      email: "e-post",
      website: "nettside",
      booking: "booking",
    };
    toast({
      title: "Kontaktinformasjon",
      description: `🚧 Direkte ${messages[type]}-integrasjon er ikke implementert ennå.`,
    });
  };

  if (!business) {
    return (
      <PageWrapper>
        <Section>
          <h1>Bedrift ikke funnet</h1>
          <Link to="/">Tilbake til forsiden</Link>
        </Section>
      </PageWrapper>
    );
  }

  const slides = business.gallery.map((img) => ({
    src: `/images/${slug}/${img.filename}`,
    alt: img.alt || "",
  }));

  return (
    <PageWrapper>
      {/* <ScrollToTop /> */}
      <Section>
        <Link to="/">
          <ActionButton>
            <ArrowLeft size={16} /> Tilbake til bedrifter
          </ActionButton>
        </Link>
      </Section>

      <Section>
        <Hero>
          <Left>
            <span
              style={{
                background: "#ede9fe",
                color: "#6b21a8",
                padding: "0.5rem 0.95rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              {business.category}
            </span>
            <Title>{business.name}</Title>
            <Rating>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill={i < business.rating ? "yellow" : "gray"}
                  color={i < business.rating ? "#facc15" : "#d1d5db"}
                />
              ))}
              <span style={{ marginLeft: "0.5rem", fontSize: "0.875rem" }}>
                ({business.reviews || 89} anmeldelser)
              </span>
            </Rating>
            <Description>{business.description}</Description>
            <ButtonGroup>
              <CallButton onClick={() => handleContact("phone")}>
                <Phone size={16} /> Ring nå
              </CallButton>
              <EmailButton onClick={() => handleContact("email")}>
                <Mail size={16} /> Send e-post
              </EmailButton>
              {business.website && (
                <WebsiteButton onClick={() => handleContact("website")}>
                  <Globe size={16} /> Besøk nettside
                </WebsiteButton>
              )}
            </ButtonGroup>
          </Left>

          <Right>
            <img
              src={
                business.banner_image && business.banner_image.filename
                  ? `/images/${slug}/${business.banner_image.filename}`
                  : "https://images.unsplash.com/photo-1697256200022-f61abccad430"
              }
              alt={business.banner_image?.alt || "Banner image"}
              style={{ width: "100%", borderRadius: "1rem" }}
            />
          </Right>
        </Hero>
      </Section>

      <Section>
        <FlexGrid>
          {/* Left: Gallery */}
          <div>
            <h2>Galleri</h2>
            <GalleryGrid>
              {business.gallery.map((img, i) => (
                <GalleryImageWrapper
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <img
                    loading="lazy"
                    src={`/images/${slug}/${img.filename}`}
                    alt={img.alt}
                    onClick={() => {
                      setLightboxOpen(true);
                      setLightboxIndex(i);
                    }}
                  />
                </GalleryImageWrapper>
              ))}
            </GalleryGrid>

            <Section>
              <h3>Tjenester og Spesialiteter</h3>
              <ServicesSpecialtiesWrapper>
                <Column>
                  <h4>Tjenester</h4>
                  {business.services.map((s, i) => (
                    <p key={i}>
                      <CheckCircle size={20} color="#10b981" /> {s}
                    </p>
                  ))}
                </Column>
                <Column>
                  <h4>Spesialiteter</h4>
                  {business.specialties.map((s, i) => (
                    <p key={i}>
                      <Star size={20} color="#facc15" /> {s}
                    </p>
                  ))}
                </Column>
              </ServicesSpecialtiesWrapper>
            </Section>
          </div>

          {/* Right: Info and Opening Hours */}
          <div>
            <ContactCard>
              <h4>Kontaktinformasjon</h4>

              <ContactRow>
                <IconWrapper>
                  <MapPin size={18} color="#9333ea" />
                </IconWrapper>
                <ContactText>
                  <strong>Adresse</strong>
                  <span>{business.address}</span>
                </ContactText>
              </ContactRow>

              <ContactRow>
                <IconWrapper>
                  <Phone size={18} color="#16a34a" />
                </IconWrapper>
                <ContactText>
                  <strong>Telefon</strong>
                  <span>{business.phone}</span>
                </ContactText>
              </ContactRow>

              <ContactRow>
                <IconWrapper>
                  <Mail size={18} color="#2563eb" />
                </IconWrapper>
                <ContactText>
                  <strong>E-post</strong>
                  <span>{business.email}</span>
                </ContactText>
              </ContactRow>

              <ContactRow>
                <IconWrapper>
                  <Globe size={18} color="#7c3aed" />
                </IconWrapper>
                <ContactText>
                  <strong>Nettside</strong>
                  <span>{business.website}</span>
                </ContactText>
              </ContactRow>
            </ContactCard>

            <InfoCard>
              <h4>Åpningstider</h4>
              {days.map((day, i) => (
                <DayRow key={i} $highlight={i === currentDay}>
                  <span>{day}</span>
                  <span>{business.openingHours[i] || "Stengt"}</span>
                </DayRow>
              ))}
            </InfoCard>

            <Booking className="booking">
              <BookingContainer>
                <strong>
                  <Calendar size={20} /> Bestill time
                </strong>
                <p>Klar for et besøk? Bestill time eller konsultasjon i dag!</p>
                <button>Bestill nå</button>
              </BookingContainer>
            </Booking>
          </div>
        </FlexGrid>
      </Section>
      <GalleryLightbox
        open={lightboxOpen}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        slides={slides}
      />
    </PageWrapper>
  );
};

export default BusinessPage;
