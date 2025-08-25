import { Box } from '@mui/material';
import WorkName from './WorkName';
import WorkDescription from './WorkDescription';
import WorkStackComponent from './WorkStackComponent';

const WorkMain = ({
  projectName,
  description,
  stack,
}: {
  projectName: string;
  description: string;
  stack: string[];
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 1,
      }}
    >
      <WorkName projectName={projectName} />
      <WorkStackComponent stack={stack} />
      <WorkDescription description={description} />
    </Box>
  );
};

export default WorkMain;
