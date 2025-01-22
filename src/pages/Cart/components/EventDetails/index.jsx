import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  Paper,
  Modal,
} from "@mui/material";
import {
  DatePicker,
  TimePicker,
  renderTimeViewClock,
} from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import authService from "../../../../api/ApiService";

const EventDetails = ({ cartItems }) => {
  const [eventDetails, setEventDetails] = useState({
    eventDate: null,
    startTime: null,
    endTime: null,
    eventName: "Test Event",
    eventVenue: "Kirukku Venue",
    receiverName: "Kirruku",
    receiverMobile: "8986598949",
    address: null,
    upload_invitation: "",
    upload_gatepass: "",
  });
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const handleOpenAddressModal = () => {
    setIsAddressModalOpen(true);
  };

  const handleCloseAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  const handleAddressChange = (value) => {
    setEventDetails({ ...eventDetails, address: value });
    setIsAddressModalOpen(false); // Close modal after selecting address
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleDateChange = (newDate) => {
    setEventDetails({ ...eventDetails, eventDate: newDate });
  };

  const handleTimeChange = (field, newTime) => {
    setEventDetails({ ...eventDetails, [field]: newTime });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setEventDetails({ ...eventDetails, [name]: files[0] });
  };

  console.log("cartItems", cartItems);

  const productData = cartItems.map(
    (item, index) => (
      console.log("product data items", item),
      {
        orderId: `${Date.now()}${index}`,
        id: item._id || "undefined",
        productName: item.product_name || "Unknown",
        productPrice: item.product_price || 0,
        totalPrice: (item.product_price || 0) * (item.quantity || 1),
        quantity: item.quantity || 1,
        context: "product",
        sellerName: item.sellerName || "Unknown",
        sellerId: item.sellerId || "Unknown",
        eventStartDate: eventDetails.eventDate?.format("YYYY-MM-DD"),
        eventEndDate: eventDetails.eventDate
          ?.add(3, "days")
          .format("YYYY-MM-DD"),
      }
    )
  );

  const handleCheckout = async () => {
    const formData = new FormData();

    // Append static and dynamic fields
    formData.append("event_date", eventDetails.eventDate?.format("YYYY-MM-DD"));
    formData.append(
      "event_start_date",
      eventDetails.eventDate?.format("YYYY-MM-DD")
    );
    formData.append(
      "event_end_date",
      eventDetails.eventDate?.add(3, "days").format("YYYY-MM-DD")
    );
    formData.append("event_name", eventDetails.eventName);
    formData.append("number_of_days", "4");

    formData.append("upload_invitation", eventDetails.upload_invitation);

    formData.append("upload_gatepass", eventDetails.upload_gatepass);

    formData.append("receiver_name", eventDetails.receiverName);
    formData.append("receiver_mobilenumber", eventDetails.receiverMobile);

    // Append product data
    // *Anup - product_data should be JSON STRING before appeding to formdata........
    // cartItems.forEach((item, index) => {
    //   formData.append(
    //     `product_data[${index}][orderId]`,
    //     `${Date.now()}${index}`
    //   );
    //   formData.append(`product_data[${index}][id]`, item.id || "undefined");
    //   formData.append(
    //     `product_data[${index}][productName]`,
    //     item.product_name || "Unknown"
    //   );
    //   formData.append(
    //     `product_data[${index}][productPrice]`,
    //     item.product_price || 0
    //   );
    //   formData.append(
    //     `product_data[${index}][totalPrice]`,
    //     (item.product_price || 0) * (item.quantity || 1)
    //   );
    //   formData.append(`product_data[${index}][quantity]`, item.quantity || 1);
    //   formData.append(`product_data[${index}][context]`, "product");
    //   formData.append(
    //     `product_data[${index}][sellerName]`,
    //     item.sellerName || "Unknown"
    //   );
    //   formData.append(
    //     `product_data[${index}][sellerId]`,
    //     item.sellerId || "Unknown"
    //   );
    //   formData.append(
    //     `product_data[${index}][eventStartDate]`,
    //     eventDetails.eventDate?.format("YYYY-MM-DD")
    //   );
    //   formData.append(
    //     `product_data[${index}][eventEndDate]`,
    //     eventDetails.eventDate?.add(3, "days").format("YYYY-MM-DD")
    //   );
    // });

    // passing product_data to json stringfy befor append
    formData.append("product_data", JSON.stringify(productData));
    // Append remaining fields
    formData.append("user_id", "676644bd563f099c6637aa9b");
    formData.append("user_name", "kiruthika M");
    formData.append("user_mailid", "kiruthikamani0599@gmail.com");
    formData.append("venue_name", eventDetails.eventVenue);
    formData.append(
      "venue_open_time",
      eventDetails.startTime?.format("hh:mm A")
    );
    formData.append("location_lat", "12.900526");
    formData.append("location_long", "77.5231878");
    formData.append("event_location", "Nakshatra Namaha Creations, Bangalore");
    formData.append(
      "event_start_time",
      eventDetails.startTime?.format("hh:mm A")
    );
    formData.append("event_end_time", eventDetails.endTime?.format("hh:mm A"));
    formData.append(
      "cart_total",
      cartItems.reduce(
        (total, item) =>
          total + (item.product_price || 0) * (item.quantity || 1),
        0
      )
    );
    formData.append("base_amount", "84000");
    formData.append("gst_applied_value", "15120");
    formData.append("tds_deduction", "0");
    formData.append("amount_after_deduction", "84000");
    formData.append("paid_amount", "99120");
    formData.append("payment_method", "offline");
    formData.append("order_status", "Order Placed");
    formData.append("payment_status", "success");
    formData.append("vendors_message", "Test");

    // Send the request
    try {
      const response = await authService.createOrder(formData);
      console.log("Order Created Successfully:", response.data);
      alert("Order created successfully!");
    } catch (error) {
      console.error(
        "Error creating order:",
        error.response?.data || error.message
      );
      alert("Failed to create order. Please check console for details.");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Paper elevation={3} sx={{ p: 4, maxWidth: 600, width: "100%" }}>
          <Typography variant="h5" textAlign="center" gutterBottom>
            Event Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DatePicker
                label="Event Date"
                value={eventDetails.eventDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12}>
              <TimePicker
                label="Event Start Time"
                value={eventDetails.startTime}
                onChange={(newTime) => handleTimeChange("startTime", newTime)}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12}>
              <TimePicker
                label="Event End Time"
                value={eventDetails.endTime}
                onChange={(newTime) => handleTimeChange("endTime", newTime)}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Event Name"
                name="eventName"
                value={eventDetails.eventName}
                onChange={handleChange}
                placeholder="Enter event name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Event Venue"
                name="eventVenue"
                value={eventDetails.eventVenue}
                onChange={handleChange}
                placeholder="Enter event venue"
                fullWidth
              />
            </Grid>
            <Grid container spacing={3}>
              {/* Select Address Field */}
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick={handleOpenAddressModal}
                >
                  {eventDetails.address
                    ? eventDetails.address.label
                    : "Select Address"}
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                name="invitation"
                onChange={(e) => handleFileChange(e)}
                accept="image/*"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                name="gatePass"
                onChange={(e) => handleFileChange(e)}
                accept="image/*"
              />
            </Grid>
          </Grid>

          <Box mt={4} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Box>
        </Paper>
        <Modal
          open={isAddressModalOpen}
          onClose={handleCloseAddressModal}
          aria-labelledby="address-modal-title"
          aria-describedby="address-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography
              id="address-modal-title"
              variant="h6"
              textAlign="center"
              gutterBottom
            >
              Search Address
            </Typography>
            {/* <GooglePlacesAutocomplete
              apiKey="YOUR_GOOGLE_PLACES_API_KEY" // Replace with your API key
              selectProps={{
                value: eventDetails.address,
                onChange: handleAddressChange,
                placeholder: "Search for an address",
              }}
            /> */}
          </Box>
        </Modal>
      </Box>
    </LocalizationProvider>
  );
};

export default EventDetails;
