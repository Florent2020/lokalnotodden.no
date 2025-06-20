// src/components/AttractionsSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { attractions } from "../data/attractions";

const Section = styled.section`
  padding: 4rem 1rem;
  background: #f8fafc;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  font-size: 1.125rem;
  text-align: center;
  color: #4b5563;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
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

// const Card = styled(motion.div)`
//   background: white;
//   border-radius: 1rem;
//   overflow: hidden;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
// `;

// Wrapping <Link>
const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: relative;
  display: block;

  &:hover {
    text-decoration: none;
  }

  &:hover h3,
  &:hover p {
    text-decoration: none;
  }
`;

// Inner motion.div styled card with hover + ripple effect
const CardInner = styled(motion.div)`
  position: relative;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03) translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(52, 47, 151, 0.15);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.5s ease-out, height 0.5s ease-out, opacity 0.5s ease-out;
    opacity: 1;
    pointer-events: none;
    z-index: 0;
  }

  &:hover::after {
    width: 200%;
    height: 200%;
    opacity: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${CardInner}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e3a8a;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Category = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  color: #7c3aed;
  background: #ede9fe;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  margin-bottom: 0.5rem;
`;

const ShortDescription = styled.p`
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const AttractionsSection = () => {
  return (
    <Section>
      <Wrapper>
        <Heading>Attraksjoner i Notodden</Heading>
        <Subheading>
          Oppdag historie, festivaler, natur og museer i Telemark og omegn.
        </Subheading>
        <Grid>
          {attractions.map((item, i) => (
            <CardLink to={`/attraksjoner/${item.slug}`} key={item.id}>
              <CardInner
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Image src={item.imageUrl} alt={item.title} />
                <CardContent>
                  <Category>{item.category}</Category>
                  <Title>{item.title}</Title>
                  <ShortDescription>{item.description}</ShortDescription>
                </CardContent>
              </CardInner>
            </CardLink>
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
};

export default AttractionsSection;
