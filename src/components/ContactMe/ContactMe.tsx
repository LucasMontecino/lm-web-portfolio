'use client';
import { Box, Button, Typography } from '@mui/material';

export default function ContactMe() {
  const handleContactClick = () => {
    const email = 'lucasmontecino95@gmail.com';
    const subject = 'Contact from Portfolio';
    const body =
      'Hello Lucas, I came across your portfolio and wanted to get in touch...';
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <Box id="contact" sx={{ my: 8, textAlign: 'center' }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Contact Me
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Have a question or want to work together? Feel free
        to reach out!
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={handleContactClick}
        sx={{
          backgroundColor: '#f7dc6f',
          color: '#000',
          '&:hover': {
            backgroundColor: '#f1c40f',
          },
        }}
      >
        Send Me an Email
      </Button>
    </Box>
  );
}
