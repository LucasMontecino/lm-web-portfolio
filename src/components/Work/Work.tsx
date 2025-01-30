import {
  Box,
  Card,
  CardContent,
  Divider,
  List,
  Typography,
} from '@mui/material';
import Image from 'next/image';
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
    <Box sx={{ mt: 8 }} id={'work'}>
      <Divider />
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          py: '20px',
          fontSize: { xs: '24px', md: '48px' },
        }}
      >
        My Most Recently Work
      </Typography>
      <List
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
        }}
      >
        {workList.map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 345,
              border: '5px solid #000',
              borderRadius: '20px 0 20px 0',
              padding: '5px',
              transition: 'transform .3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
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
              <Typography variant="body1" sx={{ mb: 2 }}>
                {item.description}
              </Typography>
              <Link
                href={item.links.project}
                target="blank"
              >
                <Image
                  height={300}
                  width={300}
                  src={item.images[0]}
                  alt={item.projectName + ' img'}
                  title={item.projectName}
                  priority={item.id === 1}
                />
              </Link>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
}
