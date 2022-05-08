import React, { useState } from 'react';
import { VscArrowRight } from 'react-icons/vsc';
import { RiSearch2Line, RiRocketLine } from 'react-icons/ri';
import { BsCalendar4Event } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';

const MissionsFilter = ({ handleMissionsFilter }) => {
  const [dropdown, setDropdown] = useState({
    launch_date: false,
    launch_status: false,
  });
  const [launchDate, setLaunchDate] = useState('');
  const [launchStatus, setLaunchStatus] = useState('');
  const [keyword, setKeyword] = useState('');
  return (
    <section className="flex flex-col gap-10">
      {/* search */}
      <div>
        <header className="max-w-2xl mx-auto flex flex-col px-2">
          <form
            className="relative w-full"
            onSubmit={(e) => {
              e.preventDefault();
              handleMissionsFilter(keyword);
            }}
          >
            <label htmlFor="search-input" className="text-neutral-500">
              <input
                type="search"
                className="block w-full bg-white/5 border border-white/10 focus:ring-0 focus:outline-none focus:border-white/40 text-white rounded-full text-sm font-normal pl-14 py-3.5 sm:py-5 pr-5 md:pl-16 shadow-md"
                id="search-input"
                onChange={(e) => {
                  setKeyword(e.target.value);
                  handleMissionsFilter(e.target.value);
                }}
                placeholder="Search by rocket/mission name"
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

      <div className="flex items-center space-x-4 mx-auto">
        {/* filter */}
        <div className="relative text-white">
          <button
            onClick={() => setDropdown({ launch_date: !dropdown.launch_date })}
            className="flex items-center justify-center px-4 py-2 text-sm rounded-full border border-white/30 hover:border-blue-500 focus:outline-none "
            type="button"
          >
            <BsCalendar4Event className="w-4 h-4" />
            <span className="ml-2 capitalize text-xs sm:text-sm">
              {launchDate === 'all' || !launchDate ? 'Launch Date' : launchDate}
            </span>
            <FiChevronDown className="h-3 w-3 ml-3" />
          </button>
          <div className="absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0">
            <div
              className={`${
                dropdown.launch_date
                  ? 'transform opacity-100 scale-100'
                  : 'transform opacity-0 scale-0 pointer-events-none'
              } transition ease-out duration-200 origin-top w-52 max-h-60 text-white flex flex-col overflow-y-auto hide-scrollbar space-y-8 absolute z-30 left-0 mt-1 rounded-3xl shadow-lg bg-[#040D21] ring-1 ring-white ring-opacity-40 focus:outline-none`}
            >
              <div className="px-3 py-3">
                <ul className="space-y-1">
                  {/* filter by last week, last month, last year */}
                  {['all', 'last week', 'last month', 'last year'].map(
                    (date) => (
                      <li
                        key={date}
                        className={`${
                          launchDate === date
                            ? 'bg-white/10'
                            : 'hover:bg-white/10'
                        } flex items-center justify-between p-2 pl-4 rounded-xl cursor-pointer`}
                        onClick={() => {
                          setLaunchDate(date);
                          handleMissionsFilter(date);
                          setDropdown({ launch_date: false });
                        }}
                      >
                        <span className="text-sm capitalize">{date}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* filter */}
        <div className="relative text-white">
          <button
            onClick={() =>
              setDropdown({ launch_status: !dropdown.launch_status })
            }
            className="flex items-center justify-center px-4 py-2 text-sm rounded-full border border-white/30 hover:border-blue-500 focus:outline-none "
            type="button"
          >
            <RiRocketLine className="w-4 h-4" />
            <span className="ml-2 capitalize text-xs sm:text-sm">
              {!launchStatus || launchStatus === 'all'
                ? 'Launch Status'
                : launchStatus}
            </span>
            <FiChevronDown className="h-3 w-3 ml-3" />
          </button>
          <div className="absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0">
            <div
              className={`${
                dropdown.launch_status
                  ? 'transform opacity-100 scale-100'
                  : 'transform opacity-0 scale-0 pointer-events-none'
              } transition ease-out duration-200 origin-top w-52 max-h-60 text-white flex flex-col overflow-y-auto hide-scrollbar space-y-8 absolute z-30 left-0 mt-1 rounded-3xl shadow-lg bg-[#040D21] ring-1 ring-white ring-opacity-40 focus:outline-none`}
            >
              <div className="px-3 py-3">
                <ul className="space-y-1">
                  {/* filter by last week, last month, last year */}
                  {['all', 'success', 'failed', 'upcoming'].map((status) => (
                    <li
                      key={status}
                      className={`${
                        launchStatus === status
                          ? 'bg-white/10'
                          : 'hover:bg-white/10'
                      } flex items-center justify-between p-2 pl-4 rounded-xl cursor-pointer`}
                      onClick={() => {
                        setLaunchStatus(status);
                        handleMissionsFilter(status);
                        setDropdown({ launch_status: false });
                      }}
                    >
                      <span className="text-sm capitalize">{status}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionsFilter;
