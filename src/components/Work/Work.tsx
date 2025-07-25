import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  List,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import work from '@/data/work.json';
import type { WorkList } from '@/types';
import { FaGithub } from 'react-icons/fa';
import LanguageIcon from '@mui/icons-material/Language';

const workList: WorkList[] = work;

export default function Work() {
  return (
    <Box sx={{ mt: 8 }} id={'work'}>
      <Divider />
      <Typography
        variant='h3'
        sx={{
          textAlign: 'center',
          py: '20px',
          fontSize: { xs: '24px', md: '48px' },
          color: '#2c3e50 ',
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
        {workList.slice(0, 4).map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 345,
              border: '5px solid #2c3e50',
              borderRadius: 6,
              transition: 'transform .3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    transition: 'opacity .3s ease-in-out',
                    borderRadius: 2,
                    zIndex: 2,
                    opacity: 0,
                    '&:hover': { opacity: 1 },
                  }}
                >
                  <Button
                    variant='contained'
                    sx={{
                      bgcolor: '#3e5870',
                      ':hover': {
                        bgcolor: '#2c3e50',
                      },
                    }}
                    href={item.links.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    size='small'
                  >
                    <FaGithub size={24} />
                  </Button>
                  <Button
                    variant='contained'
                    sx={{
                      bgcolor: '#3e5870',
                      ':hover': {
                        bgcolor: '#2c3e50',
                      },
                    }}
                    href={item.links.project}
                    target='_blank'
                    rel='noopener noreferrer'
                    size='small'
                  >
                    <LanguageIcon style={{ fontSize: 24 }} />
                  </Button>
                </Box>
                <Image
                  height={300}
                  width={300}
                  src={item.images[0]}
                  alt={item.projectName + ' img'}
                  title={item.projectName}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: 6,
                    display: 'block',
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant='h5'
                  gutterBottom
                  component={'div'}
                  sx={{ textAlign: 'left', color: '#2c3e50' }}
                >
                  {item.projectName}
                </Typography>
                <Typography variant='body1' sx={{ mb: 2, textAlign: 'left' }}>
                  {item.description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
}
