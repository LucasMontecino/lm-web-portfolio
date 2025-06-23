import {
  Box,
  Container,
  CssBaseline,
  Typography,
} from '@mui/material';
import Image from 'next/image';

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
          background:
            'linear-gradient(135deg, #f7dc6f 0%, #f1c40f 100%)',
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
        <Box>
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              mb: '10px',
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
            I&apos;m Lucas Montecino.
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '24px',
                sm: '28px',
                md: '48px',
                lg: '56px',
              },
              color: '#34495e',
              fontWeight: 'medium',
            }}
          >
            A passionate Frontend Developer
          </Typography>
        </Box>
      </Container>
    </>
  );
}
