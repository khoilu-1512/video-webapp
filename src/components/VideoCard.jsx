import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

import { BsFillCheckCircleFill } from 'react-icons/bs';

import {
  defaultThumbNail,
  defaultVideoUrl,
  defaultVideoTitle,
  defaultChannelUrl,
  defaultChannelTitle,
} from '../utils/constants';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: '100%', sm: '358px', md: '320px' },
      boxShadow: 'none',
      borderRadius: 2,
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || defaultThumbNail}
        alt={snippet?.title}
        sx={{ width: { xs: '100%', sm: '358px' }, height: 200 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: '#1E1E1E', height: '120px' }}>
      <Link to={videoId ? `/video/${videoId}` : defaultVideoUrl}>
        <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
          {snippet?.title.slice(0, 60) || defaultVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId
            ? `/channel/${snippet?.channelId}`
            : defaultChannelUrl
        }
      >
        <Typography color='gray'>
          {snippet?.channelTitle || defaultChannelTitle}
          <BsFillCheckCircleFill
            style={{ fontSize: '12px', color: 'gray', marginLeft: '5px' }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
