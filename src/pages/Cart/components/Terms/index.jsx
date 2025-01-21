import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";

const Terms = ({onContinue}) => {
    const [isAccepted, setIsAccepted] = useState(false);
    


    const handleAcceptTerms = (event) => {
        setIsAccepted(event.target.checked);
    };
    const handleContinue = () => {
        if (isAccepted) {
            onContinue(); // Call the onContinue prop function to toggle the state
        } else {
            alert('Please accept the terms and conditions to continue.');
        }
    };

    return (

        <>
          <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '8px',
                        p: 3,
                        width: '90%',
                        maxWidth: '600px',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                    }}
                >
                    <Typography
                        id="terms-modal-title"
                        variant="h6"
                        sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}
                    >
                        Terms and Conditions of Use
                    </Typography>
                    <Typography
                        id="terms-modal-description"
                        sx={{
                            fontSize: '14px',
                            lineHeight: 1.6,
                            mb: 2,
                            textAlign: 'justify',
                        }}
                    >
                        Our website may use cookies and similar tracking technologies to enhance
                        user experience. You can choose to accept or decline cookies. Most web
                        browsers automatically accept cookies, but you can modify your browser
                        setting to decline cookies if you prefer.
                        <br />
                        <br />
                        <strong>8. Third-Party Links</strong>
                        <br />
                        Our website may contain links to third-party websites. We do not control
                        these websites and are not responsible for their content or privacy
                        practices. We encourage you to review the privacy policies of any
                        third-party websites you visit.
                        <br />
                        <br />
                        <strong>9. Changes to This Privacy Policy</strong>
                        <br />
                        We may update this Privacy Policy from time to time. Any changes will be
                        posted on this page with an updated effective date. We encourage you to
                        review this policy periodically for any changes.
                        <br />
                        <br />
                        <strong>10. Contact Us</strong>
                        <br />
                        If you have any questions about this Terms and Conditions Privacy Policy,
                        please contact us at:
                        <br />
                        <strong>Email:</strong> support@nithyaevent.com
                        <br />
                        <strong>Address:</strong> Kadagam Ventures Private Limited
                        <br />
                        34. Venkatappa Road Tasker Town Off Queens Road Bangalore 560051
                        <br />
                        <br />
                        <strong>Note:</strong> Once booked service, you will get to chat with
                        vendors, celebrities, DJs, etc.
                    </Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isAccepted}
                                onChange={handleAcceptTerms}
                                color="primary"
                            />
                        }
                        label="I accept the terms and conditions."
                        sx={{ mb: 2 }}
                    />
                    <Button onClick={handleContinue}>Continue to checkout</Button>
                </Box>
        </>
    )
}
export default Terms;