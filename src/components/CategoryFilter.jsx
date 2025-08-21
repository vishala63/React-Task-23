import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemButton,
  Button
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CategoryFilter({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        // Sort alphabetically for cleaner UI
        const sorted = [...data].sort((a, b) =>
          a.name ? a.name.localeCompare(b.name) : a.localeCompare(b)
        );
        setCategories(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  // Decide how many categories to display
  const displayedCategories = showAll ? categories : categories.slice(0, 5);

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Categories</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <ListItemButton onClick={() => onSelectCategory("all")}>
            All
          </ListItemButton>

          {displayedCategories.map((cat, i) => (
            <ListItemButton
              key={i}
              onClick={() =>
                onSelectCategory(typeof cat === "string" ? cat : cat.slug)
              }
            >
              {typeof cat === "string" ? cat : cat.name}
            </ListItemButton>
          ))}
        </List>

        {categories.length > 10 && (
          <Button
            size="small"
            variant="outlined"
            onClick={() => setShowAll((prev) => !prev)}
            sx={{ mt: 1 }}
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        )}
      </AccordionDetails>
    </Accordion>
  );
}
