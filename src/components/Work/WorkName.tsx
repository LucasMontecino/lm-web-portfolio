import { Typography } from '@mui/material';

const WorkName = ({ projectName }: { projectName: string }) => {
  return (
    <Typography
      variant='h5'
      gutterBottom
      component={'div'}
      sx={{ textAlign: 'left', color: '#2c3e50', margin: 0 }}
    >
      {projectName}
    </Typography>
  );
};

export default WorkName;
