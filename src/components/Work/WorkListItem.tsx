import WorkMain from './WorkMain';
import { Card, CardContent } from '@mui/material';
import type { IWorkList } from '@/types';
import WorkImage from './WorkImage';

const WorkListItem = ({ item }: { item: IWorkList }) => {
  return (
    <Card
      sx={{
        maxWidth: 350,
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
          height: '100%',
        }}
      >
        <WorkImage
          links={item.links}
          images={item.images}
          projectName={item.projectName}
        />
        <WorkMain
          projectName={item.projectName}
          description={item.description}
          stack={item.stack}
        />
      </CardContent>
    </Card>
  );
};

export default WorkListItem;
