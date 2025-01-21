import { Box, Button, Typography } from "@mui/material";
import Book from "../../../../assets/book.png";
import Receive from "../../../../assets/receive.png";
import Events from "../../../../assets/events.png";
import Pickup from "../../../../assets/pickup.png";
import "./styles.scss";

const Trusted = () => {
  return (
    <Box className="trusted-container">
      <Box className="header-section">
        <Typography variant="h4" className="header-title">
          Trusted by Over 1200+ Clients
        </Typography>
        <Typography variant="subtitle1" className="header-subtitle">
          Delivering memorable experiences for your events.
        </Typography>
        <Button href="#contact" variant="contained" color="primary">
          Get in Touch
        </Button>
      </Box>

      <Box className="features-section">
        <Box className="feature-card">
          <Box className="image-wrapper">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230416/pngtree-business-cooperation-handshake-city-background-image_2412210.jpg" alt="Book" />
          </Box>
          <Typography variant="h6" className="feature-title">
          Your Trust, Our Commitment
          </Typography>
          <Typography variant="p" className="feature-description">
          Over 1200 clients rely on us to bring their visions to life with seamless execution.
          </Typography>
        </Box>

        <Box className="feature-card">
          <Box className="image-wrapper">
            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg" alt="Receive" />
          </Box>
          <Typography variant="h6" className="feature-title">
          Creating Joy for our Clients
          </Typography>
          <Typography variant="p" className="feature-description">
          We are honored to craft events that leave lasting impressions for our valued clients.


          </Typography>
        </Box>

        <Box className="feature-card">
          <Box className="image-wrapper">
            <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" alt="Events" />
          </Box>
          <Typography variant="h6" className="feature-title">
          Where Trust Meets Excellence
          </Typography>
          <Typography variant="p" className="feature-description">
          Over clients trust us to deliver outstanding experiences every time.
          </Typography>
        </Box>

        <Box className="feature-card">
          <Box className="image-wrapper">
            <img src="https://thumbs.dreamstime.com/b/close-up-courier-handing-over-package-to-customer-highlighting-fast-satisfactory-e-commerce-service-close-up-330656366.jpg" alt="Pickup" />
          </Box>
          <Typography variant="h6" className="feature-title">
          Your Event, Our Expertise Delivered
          </Typography>
          <Typography variant="p" className="feature-description">
          Our experienced team ensures every event is planned and executed with creativity
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Trusted;
