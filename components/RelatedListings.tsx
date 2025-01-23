import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { MdSpeed, MdSettings } from "react-icons/md";

const RelatedListings = ({ dealerName, listings }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        View more cars from {dealerName}
      </Typography>
      {listings.map((listing, index) => (
        <Card key={index} sx={{ display: "flex", mb: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image={listing.image}
            alt={listing.title}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="subtitle2">{listing.title}</Typography>
            <Typography variant="h6" color="error">
              R {listing.price.toLocaleString()}
            </Typography>

            <Box display="flex" alignItems="center">
              <MdSpeed style={{ marginRight: "4px" }} />
              <Typography variant="body2">{listing.mileage} Km</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <MdSettings style={{ marginRight: "4px" }} />
              <Typography variant="body2">{listing.transmission}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
      <Button variant="outlined" color="error" fullWidth>
        View all cars
      </Button>
    </Box>
  );
};

export default RelatedListings;
