import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import LanguageIcon from '@mui/icons-material/Language';
import { Box, Button } from '@mui/material';
import { WorkLinks } from '@/types';

const WorkImage = ({
  links,
  images,
  projectName,
}: {
  links: WorkLinks;
  images: string[];
  projectName: string;
}) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '300px' }}>
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
          href={links.github}
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
          href={links.project}
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
        src={images[0]}
        alt={projectName + ' img'}
        title={projectName}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 6,
          display: 'block',
        }}
      />
    </Box>
  );
};

export default WorkImage;
