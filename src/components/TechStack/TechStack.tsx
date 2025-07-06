import { Typography, Card, CardContent, Box } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import { techStack } from './data';

export default function TechStack() {
  return (
    <Box sx={{ my: 8 }} id="tech-stack">
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        My Tech Stack
      </Typography>
      <Grid2 container spacing={3} justifyContent={'center'}>
        {techStack.map((tech) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 4 }}
            key={tech.id}
            component={'div'}
          >
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
                height: '100%',
                transition: 'transform .3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem' }}>{tech.icon}</div>
                <Typography variant="h6" mt={2}>
                  {tech.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
