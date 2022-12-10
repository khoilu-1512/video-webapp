import React from 'react';
import { Spinner, Stack } from 'react-bootstrap';

const Loader = () => (
  <div style={{ minHeight: '95vh' }}>
    <Stack
      direction='horizontal'
      className='justify-content-center align-items-center'
      style={{
        height: '80vh',
      }}
    >
      <Spinner animation='border' variant='primary' />;
    </Stack>
  </div>
);

export default Loader;
