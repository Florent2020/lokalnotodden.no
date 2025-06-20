import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Toaster } from "./components/ui/Toaster";
import HomePage from "./pages/HomePage";
import BusinessPage from "./pages/BusinessPage";
import AttractionsPage from "./pages/AttractionsPage";
import AttractionDetailPage from "./pages/AttractionDetailPage";
import ContactPage from "./pages/ContactPage";
import ThankYou from "./pages/ThankYou";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";

const AppContainer = styled.div.attrs(() => ({
  id: "scrollable-container",
}))`
  background: linear-gradient(to bottom right, #f8fafc, #eff6ff, #f5f3ff);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
`;

const Main = styled.main`
  flex: 1; /* <- This makes it fill the space */
  padding: 0; /* or your preferred spacing */
`;

function App() {
  return (
    <>
      <ScrollToTop />
      <AppContainer id="scrollable-container">
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/business/:slug" element={<BusinessPage />} />
            <Route path="/attraksjoner" element={<AttractionsPage />} />
            <Route
              path="/attraksjoner/:slug"
              element={<AttractionDetailPage />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thanks" element={<ThankYou />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Routes>
        </Main>
        <BackToTopButton />
        <Footer />
        <Toaster />
      </AppContainer>
    </>
  );
}

export default App;
