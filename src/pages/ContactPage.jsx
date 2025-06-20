// ContactPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { toast } from "../components/ui/use-toast";

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f8fafc, #ebf4ff, #f3e8ff);
`;

const HeroSection = styled.section`
  position: relative;
  padding: 5rem 1rem;
  overflow: hidden;
  background: linear-gradient(to bottom right, #7e22ce, #2563eb, #4338ca);
  color: white;
`;

const ContentSection = styled.section`
  position: relative;
  z-index: 10;
  margin-top: -2.5rem;
  padding: 4rem 1rem;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  span {
    background: linear-gradient(to right, #fde68a, #fb923c);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ContactCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const IconCircle = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  background-color: ${({ color }) => color || "rgba(0,0,0,0.05)"};
`;

const FormWrapper = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  min-height: 120px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(to right, #7e22ce, #2563eb);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Manglende informasjon",
        description: "Vennligst fyll ut alle obligatoriske felt.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Melding sendt!",
      description:
        "🚧 Skjemainnsending er ikke fullt implementert ennå—men ikke bekymre deg! Du kan be om det i din neste melding! 🚀",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Send oss e-post",
      description: "Send oss en e-post når som helst",
      value: "florent.hajdari@hotmail.com",
      color: "#2563eb",
    },
    {
      icon: Phone,
      title: "Ring oss",
      description: "Man-fre fra 09:00 til 17:00",
      value: "+47 123 45 678",
      color: "#16a34a",
    },
    {
      icon: MapPin,
      title: "Besøk oss",
      description: "Kom og si hei på kontoret vårt",
      value: "Storgata 1, 3674 Notodden",
      color: "#7c3aed",
    },
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>
              Ta <span>Kontakt</span>
            </Title>
            <p
              style={{
                fontSize: "1.25rem",
                maxWidth: "600px",
                margin: "0 auto",
                opacity: 0.9,
              }}
            >
              Har du spørsmål om vår lokale bedriftskatalog? Ønsker du å legge
              til din bedrift? Vi vil gjerne høre fra deg!
            </p>
          </motion.div>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "2rem",
            }}
          >
            {contactInfo.map((info, idx) => (
              <ContactCard
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <IconCircle color={info.color + "20"}>
                  <info.icon size={32} color={info.color} />
                </IconCircle>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                  {info.title}
                </h3>
                <p style={{ color: "#4b5563", margin: "0.5rem 0" }}>
                  {info.description}
                </p>
                <p style={{ fontWeight: 600, color: info.color }}>
                  {info.value}
                </p>
              </ContactCard>
            ))}
          </div>

          <div
            style={{
              marginTop: "4rem",
              display: "grid",
              gap: "3rem",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <FormWrapper
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                Send oss en melding
              </h2>
              <p style={{ color: "#4b5563", marginBottom: "2rem" }}>
                Fyll ut skjemaet nedenfor, så kommer vi tilbake til deg så snart
                som mulig.
              </p>
              <form
                action="https://formsubmit.co/florent.hajdari@hotmail.com"
                method="POST"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Input name="name" placeholder="Navn *" required />
                  <Input
                    name="email"
                    type="email"
                    placeholder="E-post *"
                    required
                  />
                </div>
                <Input name="subject" placeholder="Emne" />
                <Textarea name="message" placeholder="Melding *" required />
                <Button type="submit">
                  <Send size={20} style={{ marginRight: "0.5rem" }} /> Send
                  melding
                </Button>
              </form>
            </FormWrapper>
          </div>
        </Container>
      </ContentSection>
    </PageWrapper>
  );
};

export default ContactPage;
