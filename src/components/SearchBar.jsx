import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className='p-2 mx-4 d-flex shadow-none rounded-pill bg-white'
    >
      <input
        className='search-bar flex-shrink-1 flex-grow-1 rounded-pill rounded-end px-4'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        type='submit'
        className='bg-white text-danger rounded-pill'
        variant='light'
      >
        <BsSearch />
      </Button>
    </form>
  );
};

export default SearchBar;
