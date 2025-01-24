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
          mt: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
            style={{
              borderRadius: '50%',
              padding: '12px',
              border: '3px solid #f7dc6f',
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
                md: '80px',
              },
            }}
          >
            I&apos;m Lucas Montecino.
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '26px',
                sm: '30px',
                md: '56px',
              },
            }}
          >
            A passionate Frontend Developer
          </Typography>
        </Box>
      </Container>
    </>
  );
}
