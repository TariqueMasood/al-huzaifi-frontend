// components/FazilatSection.tsx
import React from "react";

type Specialization = {
  title: string;
  description: string;
};

type FazilatSectionProps = {
  heading: string;
  overview: string;
  specializationHeading: string;
  specializations: Specialization[];
};

const FazilatSection: React.FC<FazilatSectionProps> = ({
  heading,
  overview,
  specializationHeading,
  specializations,
}) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2 style={{ color: "#007b8f" }}>{heading}</h2>
      <p>{overview}</p>
      <h3 style={{ color: "#007b8f" }}>{specializationHeading}</h3>
      <ol>
        {specializations.map((item, index) => (
          <li key={index} style={{ marginBottom: "1rem" }}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FazilatSection;
