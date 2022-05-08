import React, { useState } from 'react';
import { FaRocket } from 'react-icons/fa';
import { RiRocketFill } from 'react-icons/ri';

const MissionCard = ({ mission }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="w-full break-inside-avoid mb-10">
      <div className="w-full h-72">
        <img
          src={
            mission.links && mission.links.flickr_images.length > 0
              ? mission.links.flickr_images[0]
              : mission.links.mission_patch_small
          }
          alt={mission.mission_name}
          className={`${
            mission.links && mission.links.flickr_images.length > 0
              ? 'object-cover'
              : 'object-contain p-6'
          } w-full h-full object-center rounded-lg shadow-md border border-white/20`}
        />
      </div>

      <div className="relative px-4 -mt-16">
        <div className="bg-[#081432] p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <span
              className={`${
                mission.launch_success
                  ? 'bg-teal-200 text-teal-800'
                  : mission.launch_success === null
                  ? 'bg-amber-200 text-amber-800'
                  : 'bg-red-200 text-red-800'
              } text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide`}
            >
              {mission.launch_success
                ? 'Success'
                : mission.launch_success === null
                ? 'Upcoming'
                : 'Failed'}
            </span>
            <div className="ml-2 text-gray-400 uppercase text-xs font-semibold tracking-wider flex items-center gap-1">
              <span className="flex items-center gap-2">
                <FaRocket className="text-teal-200" />
                {mission.rocket && mission.rocket.rocket_name}
              </span>
              {/* launch date */}
              <span>
                &bull;&nbsp;
                {mission.launch_date_utc &&
                  new Date(mission.launch_date_utc).toLocaleDateString(
                    'en-US',
                    {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    }
                  )}
              </span>
              {/* &bull; {mission.launch_year} */}
            </div>
          </div>

          <h4 className="my-2 text-xl text-white font-semibold uppercase leading-tight truncate">
            {mission.mission_name}
          </h4>

          <div className="mt-1 text-gray-300 text-sm">
            {/* if details more than 100 then show see more button */}
            {mission.details && mission.details.length > 100 ? (
              <p>
                {showDetails
                  ? mission.details
                  : mission.details.substring(0, 100)}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-xs text-teal-200 hover:underline"
                >
                  &nbsp;
                  {showDetails ? 'See less' : 'See more'}
                </button>
              </p>
            ) : (
              mission.details
            )}
          </div>
          <div className="mt-4 flex items-start gap-3">
            {/* <span className="text-teal-300 font-semibold">
              <RiRocketFill className="w-6 h-6" />
            </span> */}
            <span className="text-sm text-teal-200">
              <span className="">
                <RiRocketFill className="inline mr-1 mb-0.5" />
                Launch site :{' '}
              </span>
              <span className="text-sm text-gray-300">
                {mission.launch_site && mission.launch_site.site_name_long}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
