import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Button, Chip } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./styles.scss";
import authService from "../../api/ApiService";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch bookings
    const fetchBookings = async () => {
      const mockBookings = [
        {
          id: 1,
          eventName: "Wedding Ceremony",
          location: "Grand Palace, New York",
          date: "2025-01-25",
          time: "5:00 PM",
          status: "Confirmed",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          eventName: "Corporate Meeting",
          location: "Hilton Conference Hall, LA",
          date: "2025-02-10",
          time: "10:00 AM",
          status: "Pending",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          eventName: "Birthday Party",
          location: "Luxe Banquet Hall, Chicago",
          date: "2025-03-15",
          time: "7:00 PM",
          status: "Cancelled",
          image: "https://via.placeholder.com/150",
        },
      ];
      setBookings(mockBookings);
    };

    // const getOrder = async() => {
    //   const res = await authService.getOrder();

    // }

    fetchBookings();
  }, []);

  return (
    <Box className="my-bookings-page" sx={{ padding: "2rem" }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "2rem" }}>
        My Bookings
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <Card
              key={booking.id}
              sx={{
                width: "350px",
                boxShadow: 3,
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img src={booking.image} alt={booking.eventName} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {booking.eventName}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                  <LocationOnIcon fontSize="small" color="primary" />
                  <Typography variant="body2" sx={{ marginLeft: "0.5rem" }}>
                    {booking.location}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                  <EventIcon fontSize="small" color="secondary" />
                  <Typography variant="body2" sx={{ marginLeft: "0.5rem" }}>
                    {booking.date}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                  <AccessTimeIcon fontSize="small" color="action" />
                  <Typography variant="body2" sx={{ marginLeft: "0.5rem" }}>
                    {booking.time}
                  </Typography>
                </Box>
                <Chip
                  label={booking.status}
                  color={
                    booking.status === "Confirmed"
                      ? "success"
                      : booking.status === "Pending"
                      ? "warning"
                      : "error"
                  }
                  sx={{ fontWeight: "bold", marginBottom: "1rem" }}
                />
                <Button variant="outlined" color="primary" fullWidth>
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", marginTop: "2rem" }}>
            No bookings found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Bookings;
