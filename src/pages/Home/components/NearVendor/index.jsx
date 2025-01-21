import { Box, Button, Typography } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "../../../../api/ApiService";
import { getErrorMessage } from "../../../../utils/helperFunc";

const NearVendor = () => {
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();
  // const Vendors = [
  //   {
  //     id: 1,
  //     ServiceName: "Vendor 1",
  //     Location: "New York, USA",
  //     Image: "https://content.jdmagicbox.com/comp/mysore/i4/0821px821.x821.210501130528.w1i4/catalogue/naveen-hardware-and-electricals-kg-koppal-mysore-hardware-shops-wodamxl031-250.jpg",
  //   },
  //   {
  //     id: 2,
  //     ServiceName: "Vendor 2",
  //     Location: "Los Angeles, USA",
  //     Image: "https://content.jdmagicbox.com/comp/mysore/i4/0821px821.x821.210501130528.w1i4/catalogue/naveen-hardware-and-electricals-kg-koppal-mysore-hardware-shops-wodamxl031-250.jpg",
  //   },
  //   {
  //     id: 3,
  //     ServiceName: "Vendor 3",
  //     Location: "Chicago, USA",
  //     Image: "https://content.jdmagicbox.com/comp/mysore/m8/0821px821.x821.130716151709.x5m8/catalogue/mysore-electricals-sharadadevi-nagar-mysore-electronic-goods-showrooms-2slnlal.jpg",
  //   },
  //   {
  //     id: 4,
  //     ServiceName: "Vendor 4",
  //     Location: "Houston, USA",
  //     Image: "https://content.jdmagicbox.com/comp/mysore/h9/0821px821.x821.171222191722.k8h9/catalogue/mahaveer-electricals-vijaynagar-2nd-stage-mysore-electrical-shops-9gp0t9ihox.jpg",
  //   },
  //   {
  //     id: 5,
  //     ServiceName: "Vendor 5",
  //     Location: "San Francisco, USA",
  //     Image: "https://content.jdmagicbox.com/v2/comp/hyderabad/w3/040pxx40.xx40.170926140958.n8w3/catalogue/new-atoz-electricals-and-electronics-upperpally-rangareddy-electrical-shops-2lie5pb.jpg",
  //   },
  //   {
  //     id: 6,
  //     ServiceName: "Vendor 6",
  //     Location: "Miami, USA",
  //     Image: "https://content.jdmagicbox.com/comp/mysore/m8/0821px821.x821.130716151709.x5m8/catalogue/mysore-electricals-sharadadevi-nagar-mysore-electronic-goods-showrooms-2slnlal.jpg",
  //   },
  // ];

  const fetchVendors = async () => {
    try {
      const res = await authService.vendorLists();
      console.log(res.data.data);
      
      setVendors(res.data.data);
    } catch (error) {
      getErrorMessage(error);
    }
  };
  
  const handleVendorClick = (id) => {
    navigate(`/vendors/${id}`);
    } 
  useEffect(() => {
    fetchVendors();
  },[])
  return (
    <Box 
      className="Vendor-container" 
      
    >
      <Box className="Vendor-content" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '96%' }}>
        <Typography variant="h5" gutterBottom>
          Near By Vendors
        </Typography>
        <Link to="/vendors">
        <Button className="Vendor-viewAll">
          View All
        </Button>
        </Link>

      </Box>
      
      <Box className="Vendor-card-container">
        {vendors.map((item) => (
          <Box 
            className="Vendor-card" 
            key={item._id} 
            onClick={() => handleVendorClick(item._id)}
            style={{ 
             
              borderRadius: '8px', 
              width: '309px', 
                flexShrink: 0 
            }}
          >
            <img 
              src={item.shop_image_or_logo} 
              alt={item.ServiceName} 
              style={{ 
                width: '100%', 
                height: '206px', 
                objectFit: 'cover', 
                borderTopLeftRadius: '8px', 
                borderTopRightRadius: '8px' 
              }} 
            />
            <Box padding={2}>
              <Typography variant="h6" gutterBottom>
                {item.shop_name.slice(0,20)}
              </Typography>
              <Box display="flex" alignItems="center" gap={0.5}>
                <PlaceIcon color="action" />
                <Typography variant="body2">{item.address[0].distric}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NearVendor;
