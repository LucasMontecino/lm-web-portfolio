'use client';
import { Box, Button, Typography } from '@mui/material';

export default function ContactMe() {
  const handleContactClick = () => {
    const email = 'lucasmontecino95@gmail.com';
    const subject = 'Contact from Portfolio';
    const body =
      'Hello Lucas, I came across your portfolio and wanted to get in touch...';

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Gmail deep link for mobile
    // const gmailDeepLink = `googlegmail:///co?to=${email}&subject=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;

    // Gmail web URL for desktop
    // const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;

    // Mailto link (default email client)
    const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Gmail web URL (for users who prefer using Gmail in the browser)
    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;

    // Check if the user is on a mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // Try to open the Gmail app
      window.location.href = mailtoLink;

      // Fallback to Gmail web if the app is not installed
      setTimeout(() => {
        if (!document.hidden) {
          window.open(gmailWebUrl, '_blank');
        }
      }, 500); // Wait 500ms before falling back
    } else {
      // Open the default mail client on desktop
      window.location.href = mailtoLink;
    }
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
