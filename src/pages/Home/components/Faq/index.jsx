import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Box } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: "none",
  backgroundColor: "transparent",
  marginBottom: "1rem",
  borderRadius: "10px",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(() => ({
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  padding: "1rem 1.5rem",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transition: "transform 0.3s",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  padding: "1.5rem",
  fontSize: "1rem",
  color: "#555",
}));

const Faq = () => {
  const [expanded, setExpanded] = useState("");

  const faqList = [
    {
      id: 1,
      Title: "What is Nithya?",
      description:
        "NithyaTickets is a powerful online ticketing platform designed to make event management easy and efficient. Organizers can create, sell, and manage event tickets with ease.",
    },
    {
      id: 2,
      Title: "What features does Nithya provide?",
      description:
        "Our platform offers tailored ticketing options, secure payment processing, real-time analytics, and tools to track ticket sales and revenue for all event sizes.",
    },
    {
      id: 3,
      Title: "Why choose NithyaTickets?",
      description:
        "We ensure a smooth and professional ticketing experience with reliable tools that simplify event planning, helping you deliver unforgettable experiences.",
    },
    {
      id: 4,
      Title: "Is NithyaTickets secure?",
      description:
        "Yes, NithyaTickets uses encrypted payment systems to ensure secure and reliable transactions for both organizers and attendees.",
    },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : "");
  };

  return (
    <section id="faq">
      <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
        <HelpOutlineIcon sx={{ fontSize: "4rem", color: "#c026d3" }} />
        <Typography className="faq-heading" sx={{fontFamily:'Bebas Neue', fontSize:'35px', fontWeight:'500', textTransform:'uppercase', color:'#202226'}}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#555" }}>
          All your queries answered in one place
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "auto",
          padding: "0 1rem",
        }}
      >
        {faqList.map((item) => (
          <Accordion
            expanded={expanded === `panel${item.id}`}
            onChange={handleChange(`panel${item.id}`)}
            key={item.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#c026d3" }} />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {item.Title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </section>
  );
};

export default Faq;
