'use client';
import { Box, Button, Typography } from '@mui/material';

export default function Resume() {
  const handleDownloadResume = () => {
    const resumeUrl =
      'https://res.cloudinary.com/ds1jj2ef8/image/upload/fl_attachment/v1738282707/Lucas_Montecino_s_Resume_-_2025_lczzny.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.download = 'LucasMontecino_Resume_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box id="resume" sx={{ my: 8, textAlign: 'center' }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        My Resume
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Feel free to download my resume to learn more about
        my skills and experience.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={handleDownloadResume}
        sx={{
          backgroundColor: '#f7dc6f',
          color: '#000',
          '&:hover': {
            backgroundColor: '#f1c40f',
          },
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
}
