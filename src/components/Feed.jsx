import React, { useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos, Categories } from './';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Coding');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack direction='horizontal'>
      <div className='px-2 vh-100 border-right border-dark align-self-start'>
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div
        style={{ overflowY: 'auto' }}
        className='p-2 flex-grow-2 flex-shrink-2'
      >
        <h4 className='mb-2 text-white text-center fw-bold'>
          {selectedCategory} <span className='text-danger'>videos</span>
        </h4>
        <Videos videos={videos} />
      </div>
    </Stack>
  );
};

export default Feed;
