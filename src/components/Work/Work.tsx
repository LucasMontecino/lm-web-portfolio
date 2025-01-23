import {
  Box,
  Card,
  CardContent,
  CardMedia,
  List,
  Typography,
} from '@mui/material';
import Link from 'next/link';

interface WorkLinks {
  github: string;
  project: string;
}

interface WorkList {
  id: number;
  projectName: string;
  description: string;
  images: string[];
  links: WorkLinks;
}

const workList: WorkList[] = [
  {
    id: 1,
    projectName: 'Shoes Shop',
    description: '',
    images: [
      'https://res.cloudinary.com/ds1jj2ef8/image/upload/v1737579377/Captura_de_pantalla_2025-01-22_175536_e0mkih.png',
    ],
    links: {
      github:
        'https://github.com/FacuReartes/react-laba-final-project-team-2',
      project:
        'https://react-laba-final-project-team-2.vercel.app/',
    },
  },
  {
    id: 2,
    projectName: 'Food Api',
    description: '',
    images: [
      'https://res.cloudinary.com/ds1jj2ef8/image/upload/v1737580530/Captura_de_pantalla_2024-02-21_181733_rkkrht.png',
    ],
    links: {
      github: 'https://github.com/LucasMontecino/Food-Api',
      project: 'https://food-api-iota.vercel.app/',
    },
  },
  {
    id: 3,
    projectName: 'To Do App',
    description: '',
    images: [
      'https://res.cloudinary.com/ds1jj2ef8/image/upload/v1737581034/Captura_de_pantalla_2025-01-22_182341_metx6y.png',
    ],
    links: {
      github:
        'https://github.com/LucasMontecino/solvd-laba-repository/tree/main/homeworks/21-react-api',
      project:
        'https://gleeful-biscotti-f0e30d.netlify.app/',
    },
  },
];

export default function Work() {
  return (
    <Box sx={{ mt: '20px' }}>
      <List
        sx={{
          display: 'flex',
        }}
      >
        {workList.map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 345,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                component={'div'}
                sx={{ textAlign: 'center' }}
              >
                {item.projectName}
              </Typography>
              <Link
                href={item.links.project}
                target="blank"
              >
                <CardMedia
                  component={'img'}
                  height={300}
                  image={item.images[0]}
                  alt={item.projectName + ' img'}
                  title={item.projectName}
                />
              </Link>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
}
