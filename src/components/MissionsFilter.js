import React, { useEffect, useState } from 'react';
import { VscArrowRight } from 'react-icons/vsc';
import { RiSearch2Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const MissionsFilter = ({ handleOnChange }) => {
  const [keyword, setKeyword] = useState('');
  return (
    <>
      {/* search */}
      <div>
        <header className="max-w-2xl mx-auto flex flex-col px-2">
          <form
            className="relative w-full"
            onSubmit={(e) => {
              e.preventDefault();
              handleOnChange(keyword);
            }}
          >
            <label htmlFor="search-input" className="text-neutral-500">
              <input
                type="search"
                className="block w-full bg-white/5 border border-white/10 focus:ring-0 focus:outline-none focus:border-white/40 text-white rounded-full text-sm font-normal pl-14 py-3.5 sm:py-5 pr-5 md:pl-16 shadow-md"
                id="search-input"
                onChange={(e) => {
                  setKeyword(e.target.value);
                  handleOnChange(e.target.value);
                }}
                placeholder="Search by rocket name"
              />
              <button
                className="flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-80 disabled:cursor-not-allowed bg-teal-400 hover:bg-opacity-90 text-black absolute right-2 sm:right-2.5 top-1/2 transform -translate-y-1/2  sm:w-11 sm:h-11 w-9 h-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-offset-0"
                type="submit"
              >
                <VscArrowRight className="text-xl" />
              </button>
              <span className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
                <RiSearch2Line className="h-6 w-6 text-gray-400" />
              </span>
            </label>
          </form>
        </header>
      </div>
      {/* end of search */}
    </>
  );
};

export default MissionsFilter;
