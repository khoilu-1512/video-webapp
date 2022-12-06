import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} minHeight='95vh'>
      <Typography variant='h4' fontWeight={900} color='#fff' mb={3}>
        Search Results for{' '}
        <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      {<Videos videos={videos} />}
    </Box>
  );
};

export default SearchFeed;
