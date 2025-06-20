// import React, { useState } from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { attractions } from "../data/attractions";
// import { Link } from "react-router-dom";

// const Section = styled.section`
//   padding: 4rem 1rem;
//   background: #f8fafc;
// `;

// const Wrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const Heading = styled.h2`
//   font-size: 2rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 1rem;
// `;

// const Subheading = styled.p`
//   font-size: 1.125rem;
//   text-align: center;
//   color: #4b5563;
//   margin-bottom: 3rem;
// `;

// const Filters = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   margin-bottom: 2rem;
//   flex-wrap: wrap;
// `;

// const FilterButton = styled.button`
//   padding: 0.5rem 1rem;
//   border-radius: 9999px;
//   border: none;
//   background: ${({ active }) => (active ? "#2563eb" : "#e5e7eb")};
//   color: ${({ active }) => (active ? "#fff" : "#1f2937")};
//   cursor: pointer;
//   font-size: 0.875rem;
//   transition: background 0.3s ease;
// `;

// const Grid = styled.div`
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: 1fr;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;

// const Card = styled(motion.div)`
//   background: white;
//   border-radius: 1rem;
//   overflow: hidden;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   object-fit: cover;
// `;

// const CardContent = styled.div`
//   padding: 1rem;
// `;

// const Category = styled.span`
//   display: inline-block;
//   font-size: 0.75rem;
//   color: #7c3aed;
//   background: #ede9fe;
//   padding: 0.25rem 0.5rem;
//   border-radius: 9999px;
//   margin-bottom: 0.5rem;
// `;

// const Title = styled.h3`
//   font-size: 1.125rem;
//   font-weight: 600;
//   margin-bottom: 0.5rem;
// `;

// const Description = styled.p`
//   font-size: 0.875rem;
//   color: #6b7280;
// `;

// const ButtonLink = styled(Link)`
//   display: inline-block;
//   margin-top: 0.5rem;
//   font-size: 0.875rem;
//   padding: 0.4rem 0.75rem;
//   background: #2563eb;
//   color: white;
//   border-radius: 0.5rem;
//   text-decoration: none;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #1d4ed8;
//   }
// `;

// const AttractionsPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Alle");

//   const categories = ["Alle", "Historisk", "Festival", "Natur", "Museum"];

//   const filteredAttractions =
//     selectedCategory === "Alle"
//       ? attractions
//       : attractions.filter((item) => item.category === selectedCategory);

//   return (
//     <Section>
//       <Wrapper>
//         <Heading>Attraksjoner i Notodden</Heading>
//         <Subheading>
//           Oppdag historie, festivaler, natur og museer i Telemark og omegn.
//         </Subheading>
//         <Filters>
//           {categories.map((cat) => (
//             <FilterButton
//               key={cat}
//               active={selectedCategory === cat}
//               onClick={() => setSelectedCategory(cat)}
//             >
//               {cat}
//             </FilterButton>
//           ))}
//         </Filters>
//         <Grid>
//           {filteredAttractions.map((item, i) => (
//             <Card
//               key={item.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//             >
//               <Image src={item.imageUrl} alt={item.title} />
//               <CardContent>
//                 <Category>{item.category}</Category>
//                 <Title>{item.title}</Title>
//                 <Description>{item.description}</Description>
//                 <ButtonLink to={`/attraksjoner/${item.id}`}>
//                   Mer info
//                 </ButtonLink>
//               </CardContent>
//             </Card>
//           ))}
//         </Grid>
//       </Wrapper>
//     </Section>
//   );
// };

// export default AttractionsPage;

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { attractions } from "../data/attractions";

const Page = styled.div`
  padding: 3rem 1rem;
  background: #f9fafb;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #111827;
`;

const Subheading = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  border: none;
  font-weight: 500;
  background: ${({ $active }) => ($active ? "#4f46e5" : "#e5e7eb")};
  color: ${({ $active }) => ($active ? "#fff" : "#1f2937")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $active }) => ($active ? "#4338ca" : "#d1d5db")};
  }
`;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 1.5rem;
// `;

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

const Card = styled.div`
  background: white;
  border-radius: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Category = styled.span`
  background: #eef2ff;
  color: #4f46e5;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  margin-bottom: 0.75rem;
  align-self: flex-start;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #111827;
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

const InfoLink = styled(Link)`
  margin-top: auto;
  padding: 0.5rem 1rem;
  background: #4f46e5;
  color: white;
  text-align: center;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s ease;

  &:hover {
    background: #4338ca;
    color: white;
  }
`;

const AttractionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filtered =
    selectedCategory === "Alle"
      ? attractions
      : attractions.filter((a) => a.category === selectedCategory);

  const categories = ["Alle", ...new Set(attractions.map((a) => a.category))];

  return (
    <Page>
      <Wrapper>
        <Heading>Attraksjoner i Notodden</Heading>
        <Subheading>
          Oppdag historie, festivaler, natur og museer i Telemark og omegn.
        </Subheading>

        <FilterBar>
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              active={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </FilterButton>
          ))}
        </FilterBar>

        <Grid>
          {filtered.map((attraction) => (
            <Card key={attraction.id}>
              <CardImage src={attraction.imageUrl} alt={attraction.title} />
              <CardContent>
                <Category>{attraction.category}</Category>
                <Title>{attraction.title}</Title>
                <ShortDescription>{attraction.description}</ShortDescription>
                <InfoLink to={`/attraksjoner/${attraction.slug}`}>
                  Mer info
                </InfoLink>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </Page>
  );
};

export default AttractionsPage;
