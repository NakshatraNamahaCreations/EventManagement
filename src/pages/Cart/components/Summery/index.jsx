import { Box, Button, Modal, Typography } from '@mui/material';
import './styles.scss';

const Summery = ({ open, onClose, eventDetails }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="order-summary-modal-title"
            aria-describedby="order-summary-modal-description"
        >
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
                    maxWidth: '500px',
                }}
            >
                <Typography
                    id="order-summary-modal-title"
                    variant="h6"
                    sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}
                >
                    Order Summary
                </Typography>
                <Typography id="order-summary-modal-description" sx={{ mb: 2 }}>
                    <strong>Item:</strong> Sound Engineer <br />
                    <strong>Price:</strong> ₹2000 <br />
                    <strong>Event Date:</strong> {eventDetails.eventDate || 'N/A'} <br />
                    <strong>Event Venue:</strong> {eventDetails.eventVenue || 'N/A'} <br />
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClose}
                    fullWidth
                >
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default Summery;
