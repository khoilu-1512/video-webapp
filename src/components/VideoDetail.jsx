import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import ReactPlayer from 'react-player';

import { Videos, Loader } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div style={{ minHeight: '95vh' }}>
      <div
        className='d-flex flex-sm-column flex-md-row'
        style={{ flex: '1 1 0%' }}
      >
        <div style={{ flex: 1 }} className='ps-3'>
          <div style={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <h5 className='pt-4 px-2 ps-0 text-white fw-bold'>{title}</h5>
            <Stack
              direction='horizontal'
              className='px-2 ps-0 py-1 text-white justify-content-between'
            >
              <Link to={`/channel/${channelId}`}>
                <h6 className='text-white'>
                  {channelTitle}

                  <BsFillCheckCircleFill
                    style={{
                      fontSize: '12px',
                      color: 'gray',
                      marginLeft: '5px',
                    }}
                  />
                </h6>
              </Link>
              <Stack
                direction='horizontal'
                className='align-items-center'
                style={{ gap: '20px' }}
              >
                <p style={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </p>
                <p style={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </p>
              </Stack>
            </Stack>
          </div>
        </div>
        <div className='px-2 py-xs-5 py-md-1 align-items-center justify-content-center'>
          <Videos videos={videos} direction='vertical' />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
