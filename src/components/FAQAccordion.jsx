import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  { q: "Where do these products come from?", a: "We use live data from DummyJSON API." },
  { q: "Is this demo responsive?", a: "Yes, all components adapt to screen size." },
  { q: "Can I customize this?", a: "Yes, just edit the code and styles." }
];

export default function FAQAccordion() {
  return (
    <div>
      {faqs.map((f, i) => (
        <Accordion key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <strong>{f.q}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{f.a}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
