import React from "react";
import {
  Container,
  Grid,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import Navigation from "../../components/Navigation";
import VehicleDetails from "../../components/VehicleDetails";
import ShareOptions from "../../components/ShareOptions";
import ContactInfo from "../../components/ContactInfo";
import RelatedListings from "../../components/RelatedListings";
import BreadCrumbs from "../../components/BreadCrumbs";
import { fetchVehicleData } from "../../utils/api";

const relatedListings = [
  {
    image:
      "https://images.unsplash.com/photo-1676877715494-7c7867cd2f10?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "2021 BMW M3",
    price: 799990,
    mileage: 12000,
    transmission: "Automatic",
  },
  {
    image:
      "https://images.unsplash.com/photo-1657194822223-2e2c41190c5f?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "2021 Audi RS5",
    price: 1099990,
    mileage: 8000,
    transmission: "Manual",
  },
  {
    image:
      "https://images.unsplash.com/photo-1686562472684-f305deb11c92?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "2022 Mercedes-Benz C-Class",
    price: 950000,
    mileage: 5000,
    transmission: "Automatic",
  },
];

const VehiclePage = ({ vehicleData }) => {


  if (!vehicleData) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  const vehicleAttributes = vehicleData?.data?.data?.[0]?.attributes || {};
  const dealerAttributes = vehicleData?.data?.included?.[0]?.attributes || {};
  const dealerId = vehicleData?.data?.included?.[0]?.id || "";

  const imageData = vehicleAttributes.image || {};

  const constructImageUrl = (type, index = 0) => {
    if (!imageData.name || !imageData.extension) return "";
    return `https://img-ik.cars.co.za/ik-seo/${imageData.path}/tr:n-${type}/${imageData.name}_${index}/${vehicleAttributes.title}.${imageData.extension}?v=${imageData.version}`;
  };

  const images = Array.from({ length: 6 }, (_, i) =>
    constructImageUrl("stock_large", i)
  );
  const breadcrumbLinks = [
    { label: "Home", to: "/" },
    { label: "Vehicles", to: "/vehicles" },
    { label: vehicleData?.title || "Vehicle" },
  ];

  return (
    <Box>
      <Navigation />
      <BreadCrumbs links={breadcrumbLinks} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <VehicleDetails
              vehicle={vehicleAttributes}
              images={images}
              dealer={dealerAttributes}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactInfo
              dealerName={dealerAttributes.name}
              hasWhatsApp={true}
            />

            <ShareOptions />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography
                variant="body2"
                color="error"
                sx={{ cursor: "pointer" }}
              >
                Report car
              </Typography>
            </Box>

            <RelatedListings
              dealerName={dealerAttributes.name || "Seller"}
              listings={relatedListings}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  try {
    const vehicleData = await fetchVehicleData(id);
   
    return { props: { vehicleData } };
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
    return { props: { vehicleData: null } };
  }
};

export default VehiclePage;
