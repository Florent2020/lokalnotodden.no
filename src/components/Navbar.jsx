import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const NavWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

const Logo = styled(motion.div)`
  width: 2rem;
  height: 2rem;
  background: linear-gradient(to right, #7c3aed, #3b82f6);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandText = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  background: linear-gradient(to right, #7c3aed, #3b82f6);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const NavItem = styled(Link)`
  position: relative;
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ $active }) => ($active ? "#7c3aed" : "#374151")};
  font-size: 16px;
  text-transform: uppercase;

  &:hover {
    color: #7c3aed;
  }
`;

const Indicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, #7c3aed, #3b82f6);
`;

const MobileToggle = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0;
  border-top: 1px solid #e5e7eb;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 0.375rem;
  color: ${({ $active }) => ($active ? "#7c3aed" : "#374151")};
  background-color: ${({ $active }) => ($active ? "#f5f3ff" : "transparent")};

  &:hover {
    background-color: #f9fafb;
    color: #7c3aed;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Hjem", path: "/" },
    { name: "Attraksjoner", path: "/attraksjoner" },
    { name: "Kontakt", path: "/contact" },
  ];

  return (
    <NavContainer>
      <NavWrapper>
        <Brand to="/">
          <Logo whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <MapPin size={20} color="white" />
          </Logo>
          <BrandText>Notodden Lokalt</BrandText>
        </Brand>

        <NavLinks>
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              to={item.path}
              $active={location.pathname === item.path}
            >
              {item.name}
              {location.pathname === item.path && (
                <Indicator layoutId="navbar-indicator" />
              )}
            </NavItem>
          ))}
        </NavLinks>

        <MobileToggle
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} color="#374151" />
          ) : (
            <Menu size={24} color="#374151" />
          )}
        </MobileToggle>
      </NavWrapper>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <MobileLink
                key={item.name}
                to={item.path}
                active={location.pathname === item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </MobileLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar;
