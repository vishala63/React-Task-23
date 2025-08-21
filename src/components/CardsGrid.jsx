import React from "react";
import { Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";

export default function CardsGrid({ products }) {
  return (
    <Grid container spacing={3}>
      {products.map((p) => (
        <Grid item xs={12} sm={6} md={4} key={p.id}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia component="img" height="180" image={p.thumbnail} alt={p.title} />
            <CardContent>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
              <span style={{ fontWeight: "bold", flexGrow: 1 }}>${p.price}</span>
              <Button variant="contained" size="small">Add to Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
