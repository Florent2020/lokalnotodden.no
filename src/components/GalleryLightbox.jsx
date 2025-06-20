import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryLightbox = ({ open, index, onClose, slides = [] }) => {
  // Only render if there are valid slides
  if (!slides || !Array.isArray(slides) || slides.length === 0) return null;

  return <Lightbox open={open} index={index} close={onClose} slides={slides} />;
};

export default GalleryLightbox;
