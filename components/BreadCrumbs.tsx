import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
const BreadcrumbsComponent = ({ links }) => {
  return (
    <Breadcrumbs
      separator={<FaAngleRight />}
      aria-label="breadcrumb"
      sx={{ mt: 2 }}
    >
      {links.map((link, index) => (
        <>
          {link.to ? (
            <Link color="inherit" href={link.to}>
              {link.label}
            </Link>
          ) : (
            <Typography color="text.primary">{link.label}</Typography>
          )}
        </>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
