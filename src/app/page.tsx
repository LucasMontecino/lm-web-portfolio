import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Work from '@/components/Work/Work';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Navbar />
      <Hero />
      <Work />
    </Box>
  );
}
