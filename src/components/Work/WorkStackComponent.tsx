import { Grid2 as Grid } from '@mui/material';
import ShowIcon from './WorkIcons/ShowIcon';

const WorkStackComponent = ({ stack }: { stack: string[] }) => {
  return (
    <Grid container spacing={0.5}>
      {stack.map((s) => (
        <ShowIcon name={s} key={s} />
      ))}
    </Grid>
  );
};

export default WorkStackComponent;
