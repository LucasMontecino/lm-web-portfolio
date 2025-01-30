import {
  Typography,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiReactquery,
  SiTypescript,
} from 'react-icons/si';
import { FaNode, FaDatabase } from 'react-icons/fa';

const techStack = [
  { id: 1, name: 'HTML', icon: <SiHtml5 /> },
  { id: 2, name: 'CSS', icon: <SiCss3 /> },
  { id: 3, name: 'JavaScript', icon: <SiJavascript /> },
  { id: 4, name: 'React', icon: <SiReact /> },
  { id: 5, name: 'Next.js', icon: <SiNextdotjs /> },
  { id: 6, name: 'Redux', icon: <SiRedux /> },
  { id: 7, name: 'Node.js', icon: <FaNode /> },
  { id: 8, name: 'Express.js', icon: <SiExpress /> },
  { id: 9, name: 'SQL', icon: <FaDatabase /> },
  { id: 10, name: 'React Query', icon: <SiReactquery /> },
  { id: 11, name: 'TypeScript', icon: <SiTypescript /> },
];

export default function TechStack() {
  return (
    <Box sx={{ my: 8 }} id="tech-stack">
      <Typography
        variant="h3"
        align="center"
        sx={{ mb: 4 }}
      >
        My Tech Stack
      </Typography>
      <Grid2
        container
        spacing={3}
        justifyContent={'center'}
      >
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
                <div style={{ fontSize: '3rem' }}>
                  {tech.icon}
                </div>
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
