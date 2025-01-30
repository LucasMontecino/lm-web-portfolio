import ContactMe from '@/components/ContactMe/ContactMe';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Resume from '@/components/Resume/Resume';
import TechStack from '@/components/TechStack/TechStack';
import Work from '@/components/Work/Work';
import { Box, Container } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Navbar />
      <Container
        component={'main'}
        sx={{
          width: '100%',
          maxWidth: 'lg',
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Hero />
        <Box sx={{ my: 8 }}>
          <Work />
        </Box>
        <Box sx={{ my: 8 }}>
          <TechStack />
        </Box>
        <Box sx={{ my: 8 }}>
          <Resume />
        </Box>
        <Box sx={{ my: 8 }}>
          <ContactMe />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
