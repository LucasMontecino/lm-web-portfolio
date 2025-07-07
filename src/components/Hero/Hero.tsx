import { Box, Container, CssBaseline, Typography } from '@mui/material';
import Image from 'next/image';
import SocialIcons from '../SocialIcons/SocialIcons';

export default function Hero() {
  return (
    <>
      <CssBaseline />
      <Container
        id="hero"
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f7dc6f 0%, #f1c40f 100%)',
        }}
      >
        <Box>
          <Image
            src={
              'https://res.cloudinary.com/ds1jj2ef8/image/upload/v1737496436/lucas-img_axf58w.png'
            }
            alt="lm-img"
            width={'220'}
            height={'230'}
            priority
            style={{
              borderRadius: '50%',
              padding: '12px',
              border: '3px solid #f7dc6f',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '32px',
                sm: '36px',
                md: '64px',
                lg: '80px',
              },
              fontWeight: 'bold',
              color: '#2c3e50',
            }}
          >
            Hi, I am{' '}
            <Box
              sx={{
                display: 'inline',
                color: 'primary.contrastText',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.9)',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  textShadow: '0 0 10px #000',
                },
              }}
            >
              Lucas
            </Box>
          </Typography>
          <SocialIcons size={36} />
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: '14px',
                  sm: '18px',
                  md: '36px',
                  lg: '48px',
                },
                color: '#34495e',
                fontWeight: 'medium',
                pt: 6,
              }}
            >
              I am a Frontend / Full Stack Developer, currently taking the Solvd
              Node.js Course and the Full Stack Course at Open University.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
