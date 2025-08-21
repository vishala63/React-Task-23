import React from "react";
import Slider from "react-slick";
import { Box, Paper } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductCarousel({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box sx={{ my: 3 }}>
      <Slider {...settings}>
        {products.slice(0, 5).map((p) => (
          <Paper key={p.id} sx={{ overflow: "hidden", borderRadius: 2 }}>
            <img
              src={p.thumbnail}
              alt={p.title}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "5px"
            }}>
              {p.title}
            </div>
          </Paper>
        ))}
      </Slider>
    </Box>
  );
}
