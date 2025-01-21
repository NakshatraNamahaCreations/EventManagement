import React, { useEffect, useState } from "react";
import authService from "../../../../../api/ApiService";
import "./styles.scss"; // Ensure the styles are scoped to avoid clashes
import { Box, Button, Divider, Typography } from "@mui/material";

const Technician = () => {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getTechnicians = async () => {
    try {
      setLoading(true);
      const res = await authService.getAllTechnicians();
      setTechnicians(res.data.tech); // Update according to your API response structure
    } catch (err) {
      setError("Failed to fetch technicians. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTechnicians();
  }, []);

  return (
   <>
       {technicians.length > 0 && (
        <Box className="Technicians-section">
          <Typography variant="h5" className="Technicians-title">
            Additional Technicians
          </Typography>
          <Divider sx={{ marginBottom: "1rem" }} />
          <Box className="Technicians-list">
            {technicians.map((tech) => (
              <Box key={tech._id} className="Technician-card">
                <Typography variant="p" className="Tech-name">
                  {tech.service_name} ({tech.category})
                </Typography>
                <Typography variant="p" className="Tech-price">
                  Price: ₹{tech.price.toLocaleString()}
                </Typography>
                <Typography variant="p" className="Tech-vendor">
                  Vendor: {tech.vendor_name}
                </Typography>
                <Typography variant="p" className="Tech-commission">
                  Shop Name: {tech.shop_name}
                </Typography>
                <Button variant="outlined" variant="p" className="Add-tech-btn" onClick={() => handleAddTechnicianToCart(tech)}>
                  Add to Cart
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      )}
   </>
  );
};

export default Technician;
