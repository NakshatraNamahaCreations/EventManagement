import { Box, Button, CardContent, Typography } from "@mui/material";
import Speaker from "../../../../assets/Speakerss.jpg";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../../../api/ApiService";
import Money from "../../../../assets/money.png";
import CategoryIcon from "../../../../assets/categoryIcon.png";
import StarIcon from "../../../../assets/star.png";
import { useEffect, useState } from "react";

const Featured = () => {
  const [featuredProduct, setFeatureProduct] = useState([]);
  const navigate = useNavigate();
 
  const fetchFeaturedProducts = async () => {
    const res = await authService.featuredProducts();
    setFeatureProduct(res.data.data);    
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };
  const handleViewAll = () => {
    window.scrollTo(0, 0);
    navigate(`/Featuredproducts`);
  };
  return (
    <Box className="container-featured">
      <Box className="featured-header">
      {/* <img className="heading-icon" src={StarIcon} alt="Not found" /> */}
        <Typography className="featured-heading">Featured Products</Typography>
        <Button
          className="featured-viewAll"
          variant="outlined"
          onClick={handleViewAll}
        >
          View all
        </Button>
      </Box>
      <Box className="featured-main">
        {featuredProduct.map((item) => (
          <Box
            key={item.id}
            className="product-card"
            onClick={() => handleProductClick(item._id)}
          >
            <img src={item.product_image} alt="Not found" />
            <CardContent>
              <Typography variant="h6" className="product-name">
                {item.product_name}
              </Typography>
              <Box sx={{display:'flex',alignItems:'center', gap:'1rem'}}>
              <Typography variant="h6" className="product-price">
                <img className="money-icon" src={Money} alt="Not found" />
                <strong> {item.product_price}</strong>
              </Typography>
              <Typography variant="h6" className="product-category">
                <img
                  className="category-icon"
                  src={CategoryIcon}
                  alt="Not found"
                />

                <strong> {item.product_category}</strong>
              </Typography>
              </Box>
        
            </CardContent>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Featured;
