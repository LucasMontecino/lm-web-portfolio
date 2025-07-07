import { Box, IconButton, Link } from '@mui/material';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialIcons = ({ size = 24 }: { size?: number }) => {
  return (
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
        sx={{
          color: '#fff',
          transition: 'transform .2s ease-in-out',
          '&:hover': { transform: 'scale(1.2)' },
        }}
      >
        <FaGithub size={size} />
      </IconButton>
      <IconButton
        component={Link}
        href="https://linkedin.com/in/lucasmontecino9"
        target="_blank"
        rel="noopener"
        sx={{
          color: '#fff',
          transition: 'transform .2s ease-in-out',
          '&:hover': { transform: 'scale(1.2)' },
        }}
      >
        <FaLinkedin size={size} />
      </IconButton>
      <IconButton
        component={Link}
        href="https://x.com/lucas_montecino"
        target="_blank"
        rel="noopener"
        sx={{
          color: '#fff',
          transition: 'transform .2s ease-in-out',
          '&:hover': { transform: 'scale(1.2)' },
        }}
      >
        <FaXTwitter size={size} />
      </IconButton>
      <IconButton
        component={Link}
        href="https://www.instagram.com/lucasmontecino9/"
        target="_blank"
        rel="noopener"
        sx={{
          color: '#fff',
          transition: 'transform .2s ease-in-out',
          '&:hover': { transform: 'scale(1.2)' },
        }}
      >
        <FaInstagram size={size} />
      </IconButton>
    </Box>
  );
};

export default SocialIcons;
