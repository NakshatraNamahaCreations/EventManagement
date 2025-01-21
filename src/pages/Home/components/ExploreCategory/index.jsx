import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Shamiana from "../../../../assets/tent1.jpg";
import Sound from "../../../../assets/speakerFinal.jpg";
import Lights from "../../../../assets/lights.jpg";
import Video from "../../../../assets/cameraFinal.jpg";
import Fabrication from "../../../../assets/carpet.png";
import Genset from "../../../../assets/genset.png";
import "./styles.scss";

const ExploreCategory = () => {
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    window.scrollTo(0,0);
    navigate(`/category/${category}`);
  };

  const handleViewAll = () => {
    window.scrollTo(0,0);
    navigate(`/categories`);
  };

  const categories = [
    { name: "Sound", icon: Sound },
    { name: "Video", icon: Video },
    { name: "Lighting", icon: Lights },
    // { name: "Fabrication", icon: Fabrication },
    { name: "Genset", icon: Genset },
    { name: "Shamiana", icon: Shamiana },
    { name: "Shamiana", icon: Shamiana }
  ];

  return (
    <Box className="main-container">
      <Box className="card-header">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" className="small-title">Featured Product Categories</Typography>
          <Typography variant="h2" className="title">Find New category</Typography>
        </Box>
        <Typography onClick={handleViewAll}>View All</Typography>
      </Box>
      <Box className="scroll-container-category">
        {categories.map((category, index) => (
          <Box
            key={index}
            className="category-card"
            onClick={() => handleNavigation(category.name.toLowerCase())}
          >
            <Box className="image-container">
              <img className="card-img" src={category.icon} alt={category.name} />
            </Box>
            <Typography className="category-name">{category.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExploreCategory;
