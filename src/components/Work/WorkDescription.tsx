import { Typography } from '@mui/material';

const WorkDescription = ({ description }: { description: string }) => {
  return (
    <Typography
      variant='body1'
      sx={{
        textAlign: 'left',
        flexGrow: 1,
        fontWeight: 400,
        color: '#2c3e50',
        marginTop: 0.5,
      }}
    >
      {description}
    </Typography>
  );
};

export default WorkDescription;
