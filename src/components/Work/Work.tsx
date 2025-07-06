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
import work from '@/data/work.json';
import type { WorkList } from '@/types';

const workList: WorkList[] = work;

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
              <Link href={item.links.project} target="blank">
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
