import { Typography } from '@mui/material';

const WorkTitle = ({ title }: { title: string }) => {
  return (
    <Typography
      variant='h3'
      sx={{
        textAlign: 'center',
        py: '20px',
        fontSize: { xs: '24px', md: '48px' },
        color: '#2c3e50 ',
      }}
    >
      {title}
    </Typography>
  );
};

export default WorkTitle;
