import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

import { SearchBar } from './';
import videoLogo from '../assets/logo.png';

const Navbar = () => {
  return (
    <Stack
      direction='horizontal'
      gap={2}
      className='p-3 bg-dark border-bottom border-white d-flex justify-content-between align-items-center position-sticky top-0'
    >
      <Link to='/' className='d-flex align-items-center'>
        <img src={videoLogo} alt='logo' height={45} />
        <h4 className='m-2 text-white' style={{ fontWeight: '900' }}>
          Vite React
        </h4>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
