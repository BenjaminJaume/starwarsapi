import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="text-center mb-3">
      <input
        type="search"
        placeholder="Find your character"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
