import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Clock, MapPin, Star, Phone } from "lucide-react";

const CardWrapper = styled(motion.div)`
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }

  &:visited {
    color: inherit;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  ${CardWrapper}:hover & {
    transform: scale(1.1);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 16px;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  backdrop-filter: blur(4px);
`;

const StatusBadge = styled(Badge)`
  right: 16px;
  background-color: ${({ open }) => (open ? "#d1fae5" : "#fee2e2")};
  color: ${({ open }) => (open ? "#065f46" : "#991b1b")};
  border: 1px solid ${({ open }) => (open ? "#a7f3d0" : "#fecaca")};
`;

const CategoryBadge = styled(Badge)`
  left: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #4b5563;
`;

const Content = styled.div`
  padding: 24px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #111827;
  margin: 0;
  transition: color 0.3s;
  ${CardWrapper}:hover & {
    color: #7c3aed;
    text-decoration: none !important;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #4b5563;
  margin: 12px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #374151;

  svg {
    margin-top: 1px;
  }
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  font-size: 14px;
  color: #374151;

  svg {
    color: #fbbf24;
  }

  span {
    margin-left: 4px;
  }
`;

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = hasHalfStar ? fullStars + 1 : fullStars;

  return [...Array(5)].map((_, i) => (
    <Star
      key={i}
      size={16}
      fill={i < totalStars ? "#facc15" : "none"}
      stroke="#facc15"
    />
  ));
};

const BusinessCard = ({ business, index }) => {
  const isOpen = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();

    if (business.openingHours && business.openingHours[currentDay]) {
      const hours = business.openingHours[currentDay];
      if (hours === "Stengt") return false;

      const [open, close] = hours.split(" - ").map((time) => {
        const [hour, minute] = time.split(":").map(Number);
        return hour + minute / 60;
      });

      return currentHour >= open && currentHour < close;
    }

    return true;
  };

  return (
    <CardWrapper
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <StyledLink to={`/business/${business.slug}`}>
        <ImageWrapper>
          <Image
            alt={`${business.name} fasade`}
            src="https://images.unsplash.com/photo-1564530427306-528738a7a6e7"
          />
          <StatusBadge open={isOpen()}>
            {isOpen() ? "Åpent" : "Stengt"}
          </StatusBadge>
          <CategoryBadge>{business.category}</CategoryBadge>
        </ImageWrapper>

        <Content>
          <div>
            <Title>{business.name}</Title>
            <Description>{business.description}</Description>
            <RatingRow>
              {renderStars(business.rating)}
              <span>{business.rating}</span>
              <span>({business.reviews} anmeldelser)</span>
            </RatingRow>
          </div>

          <div style={{ marginTop: "12px" }}>
            <InfoRow>
              <MapPin size={16} color="#3b82f6" />
              {business.address}
            </InfoRow>
            <InfoRow>
              <Phone size={16} color="#10b981" />
              {business.phone}
            </InfoRow>
            <InfoRow>
              <Clock size={16} color="#f97316" />
              {business.openingHours &&
              business.openingHours[new Date().getDay()]
                ? business.openingHours[new Date().getDay()]
                : "Se åpningstider"}
            </InfoRow>
          </div>
        </Content>
      </StyledLink>
    </CardWrapper>
  );
};

export default BusinessCard;
