import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Chip,
  Box,
  Rating
} from "@mui/material";
import CategoryFilter from "./CategoryFilter";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    let url =
      selectedCategory === "all"
        ? "https://dummyjson.com/products?limit=100"
        : `https://dummyjson.com/products/category/${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  return (
    <>
      {/* Horizontal category buttons */}
      <CategoryFilter onSelectCategory={(cat) => setSelectedCategory(cat)} />

      {/* Vertical product grid */}
      <Grid container spacing={2} sx={{ p: 2 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ position: "relative" }}>
              {/* Discount badge */}
              {product.discountPercentage > 0 && (
                <Chip
                  label={`-${product.discountPercentage}%`}
                  color="error"
                  size="small"
                  sx={{ position: "absolute", top: 8, right: 8 }}
                />
              )}

              <CardMedia
                component="img"
                height="180"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  {product.title}
                </Typography>

                {/* Price */}
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>

                {/* Rating */}
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Rating
                    value={product.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {product.rating}
                  </Typography>
                </Box>
              </CardContent>

              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  fullWidth
                  color="success"
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
