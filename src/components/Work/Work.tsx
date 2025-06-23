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
      'https://res.cloudinary.com/ds1jj2ef8/image/upload/v1742237005/solvd-ecommerce-screenshot_sirxts.png',
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
      'https://res.cloudinary.com/ds1jj2ef8/image/upload/v1742237155/food-api-screen_qu4pxz.png',
    ],
    links: {
      github: 'https://github.com/LucasMontecino/Food-Api',
      project: 'https://food-api-iota.vercel.app/',
    },
  },
  {
    id: 3,
    projectName: 'Dogs Api',
    description: '',
    images: [
      'https://res.cloudinary.com/ds1jj2ef8/image/upload/v1750718656/dogs-api_pn4egd.png',
    ],
    links: {
      github: 'https://github.com/LucasMontecino/Dogs-Api',
      project: 'https://dogs-api-lilac.vercel.app/',
    },
  },
  {
    id: 4,
    projectName: 'To Do App',
    description: '',
    images: [
      'https://res.cloudinary.com/ds1jj2ef8/image/upload/v1750718383/todo-app_uirr0p.png',
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
        {workList.slice(0, 3).map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 345,
              border: '5px solid #000',
              borderRadius: 6,
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
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: 6,
                  }}
                />
              </Link>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
}
