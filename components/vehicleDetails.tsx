import React, { useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  Box,
  IconButton,
  Divider,
  Snackbar,
  Stack,
} from "@mui/material";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import {
  MdCalendarToday,
  MdSpeed,
  MdSettings,
  MdLocalGasStation,
  MdCheckCircle,
  MdAltRoute,
  MdColorLens,
  MdLocationOn,
} from "react-icons/md";
import { GiCarWheel } from "react-icons/gi";

const VehicleDetails = ({ vehicle, images, dealer }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [liked, setLiked] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const maxSteps = images.length;

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
    setSnackbarMessage(liked ? "Removed from Wishlist" : "Added to Wishlist");
    setOpenSnackbar(true);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
      <Box
        sx={{
          backgroundColor: "#e0e0e0",
          display: "grid",
          placeItems: "center",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://placehold.co/600x400/png"
          alt="Dealer logo"
          style={{
            maxWidth: "50%",
            maxHeight: "50%",
            objectFit: "contain",
          }}
        />
      </Box>

      <Typography variant="h4" component="h1" gutterBottom>
        {vehicle.title}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h5"
          color="error"
          gutterBottom
          sx={{ flexGrow: 1 }}
        >
          R {vehicle.price.toLocaleString()}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }} color={"#ce181e"}>
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {liked ? "Remove from Wishlist" : "Add to Wishlist"}
          </Typography>
          <IconButton
            onClick={toggleLike}
            sx={{ color: liked ? "r#ce181e" : "gray" }}
          >
            {liked ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
          </IconButton>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        message={`${vehicle.title} - ${snackbarMessage}`}
      />

      <Box sx={{ position: "relative", mb: 2 }}>
        <Box
          component="img"
          sx={{
            height: 400,
            display: "block",
            maxWidth: "100%",
            overflow: "hidden",
            width: "100%",
            objectFit: "cover",
          }}
          src={images[activeStep]}
          alt={`Vehicle image ${activeStep + 1}`}
        />
        <IconButton
          onClick={handleBack}
          sx={{
            position: "absolute",
            left: 8,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <FaChevronLeft />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <FaChevronRight />
        </IconButton>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          {images.map((image, index) => (
            <Box
              key={index}
              component="img"
              sx={{
                height: 50,
                width: 50,
                m: 0.5,
                cursor: "pointer",
                border: index === activeStep ? "2px solid #1976d2" : "none",
              }}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </Box>
      </Box>

      <Paper elevation={1} sx={{ bgcolor: "grey.100", p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Specification Summary
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={2}>
            <Box
              display="inline-flex"
              alignItems="center"
              sx={{
                bgcolor: "white",
                p: 1,
                borderRadius: 1,
                marginRight: 0,
              }}
            >
              <MdCalendarToday style={{ marginRight: "8px" }} />
              <Typography variant="body2">{vehicle.year}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              display="inline-flex"
              alignItems="center"
              sx={{
                bgcolor: "white",
                p: 1,
                borderRadius: 1,
                marginRight: 0,
              }}
            >
              <MdSpeed style={{ marginRight: "8px" }} />
              <Typography variant="body2">{vehicle.mileage}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              display="inline-flex"
              alignItems="center"
              sx={{
                bgcolor: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <MdSettings style={{ marginRight: "8px" }} />
              <Typography variant="body2">{vehicle.transmission}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              display="inline-flex"
              alignItems="center"
              sx={{
                bgcolor: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <MdLocalGasStation style={{ marginRight: "8px" }} />
              <Typography variant="body2">{vehicle.fuel_type}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              display="inline-flex"
              alignItems="center"
              sx={{
                bgcolor: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <GiCarWheel style={{ marginRight: "8px" }} />
              <Typography variant="body2">
                {vehicle.vehicle_axle_config || "4x2"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              display="inline-flex"
              alignItems="center"
              sx={{
                bgcolor: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <MdColorLens style={{ marginRight: "8px" }} />
              <Typography variant="body2">{vehicle.colour}</Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          display="inline-flex"
          alignItems="center"
          sx={{
            bgcolor: "white",
            p: 1,
            borderRadius: 1,
          }}
        >
          <MdCheckCircle style={{ marginRight: "8px" }} />
          <Typography variant="body2">{vehicle.condition} condition</Typography>
        </Box>
      </Paper>

      <Box mb={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h6" gutterBottom>
            {dealer.name}
          </Typography>
          <Box display="flex" alignItems="center">
            <MdLocationOn style={{ marginRight: "4px" }} />
            <Typography variant="body2" color="text.secondary" mr={1}>
              {dealer.distance} km away
            </Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">
            {dealer.locality}, {dealer.province}
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography
              variant="body2"
              color={"#ce181e"}
              sx={{ cursor: "pointer" }}
            >
              View Map
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Description */}
      <Box mb={2}>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Description:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {vehicle.description}
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="body2" color="text.secondary">
          Reference: {vehicle.reference}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box mb={2}>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Options:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {vehicle.options || "Not specified"}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Finance Availability:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This vehicle does not qualify for vehicle asset finance. Please
          contact the dealership directly to find out more.
        </Typography>
      </Box>
    </Paper>
  );
};

export default VehicleDetails;
