import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactInfo = ({ dealerName, hasWhatsApp }) => {
  const [showNumber, setShowNumber] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    area: "",
    carAlerts: false,
    carNews: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "carAlerts" || name === "carNews" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3, bgcolor: "grey.100" }}>
      <Typography variant="h6" gutterBottom>
        Contact {dealerName}
      </Typography>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<FaPhoneAlt />}
        onClick={() => setShowNumber(!showNumber)}
        sx={{ mb: 1 }}
      >
        {showNumber ? "082 70* ****" : "Show Number"}
      </Button>
      {hasWhatsApp ? (
        <Button
          variant="outlined"
          fullWidth
          startIcon={<FaWhatsapp />}
          sx={{ mb: 2, color: "green", borderColor: "green" }}
        >
          WhatsApp the Dealer
        </Button>
      ) : (
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          WhatsApp is not available for this dealer. Please contact via phone or
          email.
        </Typography>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Area"
          name="area"
          value={formData.area}
          onChange={handleChange}
          required
        />
        <Box mt={2}>
          <FormControlLabel
            control={
              <Checkbox
                name="carAlerts"
                checked={formData.carAlerts}
                onChange={handleChange}
              />
            }
            label="Car Alerts"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="carNews"
                checked={formData.carNews}
                onChange={handleChange}
              />
            }
            label="Car News"
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="error"
          fullWidth
          sx={{ mt: 2 }}
          startIcon={<FaEnvelope />}
        >
          Message the Dealer
        </Button>
      </form>

      <Typography variant="subtitle1" display="block" sx={{ mt: 1 }}>
        By submitting, you agree to Cars.co.za's Terms of Service and Privacy
        Policy.
      </Typography>
      <Typography
        variant="caption"
        display="block"
        sx={{ mt: 1 }}
        color={"grey"}
      >
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service Apply.
      </Typography>
    </Paper>
  );
};

export default ContactInfo;
