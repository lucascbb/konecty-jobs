import React, { ChangeEvent, FocusEvent  } from 'react';
import Image from 'next/image';
import search from '../../images/search-icon.png';

interface InputSearchProps {
  onSearchChange: (value: string) => void;
  onSearchClick: () => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ onSearchChange, onSearchClick }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  const handleSearch = () => {
    onSearchClick();
  };


  return (
    <div className='w-10 h-20 flex items-center'>
      <Image
        src={search}
        alt='lupa de pesquisa'
        width={24}
        height={24}
        quality={100}
        className="relative left-3 top-0 w-5 h-5 text-gray-500 z-10"
        onClick={handleSearch}
      />
      <input
        type="text"
        placeholder="Buscar produto"
        className="absolute pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        onChange={handleChange}
        onBlur={handleSearch}
      />
    </div>
  );
};

export default InputSearch;
