'use client';
import { Box, Button, Typography } from '@mui/material';

export default function Resume() {
  const handleDownloadResume = () => {
    const resumeUrl = '/LucasMontecino_Resume_2025.pdf';
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
      <Typography variant="h3" sx={{ mb: 4, color: '#2c3e50' }}>
        My Resume
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Feel free to download my resume to learn more about my skills and
        experience.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={handleDownloadResume}
        sx={{
          backgroundColor: '#f7dc6f',
          color: '#2c3e50',
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
