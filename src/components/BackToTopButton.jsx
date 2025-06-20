import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowUp } from "lucide-react";

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #0077cc;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 10000;
  opacity: 1;
  transition: opacity 0.3s ease;
`;

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("scrollable-container");
      if (container) {
        setVisible(container.scrollTop > 300);
      }
    };

    const container = document.getElementById("scrollable-container");
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    const container = document.getElementById("scrollable-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return visible ? (
    <Button onClick={scrollToTop}>
      <ArrowUp size={20} />
    </Button>
  ) : null;
};

export default BackToTopButton;
