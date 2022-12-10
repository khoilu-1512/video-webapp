import React from 'react';
import Stack from 'react-bootstrap/Stack';

import { ChannelCard, Loader, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || 'horizontal'}
      className='p-4 d-flex flex-wrap justify-content-between align-items-center'
      gap={2}
    >
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </Stack>
  );
};

export default Videos;
