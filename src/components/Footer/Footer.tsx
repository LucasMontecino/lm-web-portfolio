import {
  Box,
  Typography,
  IconButton,
  Link,
} from '@mui/material';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <IconButton
          component={Link}
          href="https://github.com/lucasmontecino"
          target="_blank"
          rel="noopener"
          sx={{ color: '#fff' }}
        >
          <FaGithub size={24} />
        </IconButton>
        <IconButton
          component={Link}
          href="https://linkedin.com/in/lucasmontecino9"
          target="_blank"
          rel="noopener"
          sx={{ color: '#fff' }}
        >
          <FaLinkedin size={24} />
        </IconButton>
        <IconButton
          component={Link}
          href="https://x.com/lucas_montecino"
          target="_blank"
          rel="noopener"
          sx={{ color: '#fff' }}
        >
          <FaXTwitter size={24} />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.instagram.com/lucasmontecino9/"
          target="_blank"
          rel="noopener"
          sx={{ color: '#fff' }}
        >
          <FaInstagram size={24} />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Lucas Montecino. All
        rights reserved.
      </Typography>
    </Box>
  );
}
