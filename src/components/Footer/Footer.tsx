import { Box, Typography } from '@mui/material';

import SocialIcons from '../SocialIcons/SocialIcons';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 4,
        backgroundColor: '#2c3e50',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Let&apos;s Connect!
      </Typography>
      <SocialIcons />
      <Typography variant="body2" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Lucas Montecino. All rights reserved.
      </Typography>
    </Box>
  );
}
