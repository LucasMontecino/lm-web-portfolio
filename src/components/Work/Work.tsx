import { Box, Divider } from '@mui/material';
import work from '@/data/work.json';
import type { IWorkList } from '@/types';
import WorkTitle from './WorkTitle';
import WorkList from './WorkList';

const workList: IWorkList[] = work;

export default function Work() {
  return (
    <Box sx={{ mt: 8 }} id={'work'}>
      <Divider />
      <WorkTitle title='My Most Recently Work' />
      <WorkList workList={workList} />
    </Box>
  );
}
