import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import { SearchBar } from './';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
        borderBottom: '1px solid #fff',
      }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src='../assets/logo.png' alt='logo' height={45} />
        <Typography
          variant='h5'
          fontWeight={900}
          color='#fff'
          ml={{ md: '20px' }}
        >
          Vite React
        </Typography>
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
