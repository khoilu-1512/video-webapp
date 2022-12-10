import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { defaultProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <div
    style={{
      width: { xs: '356px', md: '320px' },
      borderRadius: '20px',
      height: '326px',
      marginTop: marginTop,
    }}
    className='m-auto d-flex align-items-center justify-content-center shadow-none'
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <div className='d-flex flex-column justify-content-center text-center text-white'>
        <div
          alt={channelDetail?.snippet?.title}
          style={{
            height: '180px',
            width: '180px',
            marginBottom: 2,
            border: '1px solid #e3e3e3',
            borderRadius: '50%',
            backgroundImage: `url(${
              channelDetail?.snippet?.thumbnails?.high?.url ||
              defaultProfilePicture
            })`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <h6 className='mt-3'>
          {channelDetail?.snippet?.title}{' '}
          <BsFillCheckCircleFill
            style={{
              fontSize: '14px',
              color: 'gray',
              margin: '5px',
            }}
          />
        </h6>
        {channelDetail?.statistics?.subscriberCount && (
          <p style={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString('en-US')}{' '}
            Subscribers
          </p>
        )}
      </div>
    </Link>
  </div>
);

export default ChannelCard;
