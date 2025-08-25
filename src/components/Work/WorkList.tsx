import { List } from '@mui/material';

import type { IWorkList } from '@/types';
import WorkListItem from './WorkListItem';

const WorkList = ({ workList }: { workList: IWorkList[] }) => {
  return (
    <List
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '24px',
      }}
    >
      {workList
        .slice(0, 5)
        .reverse()
        .map((item) => (
          <WorkListItem key={item.id} item={item} />
        ))}
    </List>
  );
};

export default WorkList;
