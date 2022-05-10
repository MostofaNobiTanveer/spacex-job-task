import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../store/features/missionSlice';
import MissionCard from './MissionCard';
import MissionCardSkeleton from './MissionCardSkeleton';
import MissionsFilter from './MissionsFilter';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading } = useSelector((state) => state.mission);
  const [filteredMissions, setFilteredMissions] = useState(missions);

  const handleMissionsFilter = (...args) => {
    console.log(args);

    if (args[0] === 'all') {
      setFilteredMissions(missions);
    } else if (args[0] === 'success') {
      setFilteredMissions(missions.filter((mission) => mission.launch_success));
    } else if (args[0] === 'failed') {
      setFilteredMissions(
        missions.filter(
          (mission) =>
            !mission.launch_success && mission.launch_success !== null
        )
      );
    } else if (args[0] === 'upcoming') {
      setFilteredMissions(missions.filter((mission) => mission.upcoming));
    } else if (args[0] === 'last week') {
      setFilteredMissions(
        missions.filter((mission) => {
          const date = new Date(mission.launch_date_utc);
          const today = new Date();
          const diff = today.getTime() - date.getTime();
          const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
          return diffDays <= 7;
        })
      );
    } else if (args[0] === 'last month') {
      setFilteredMissions(
        missions.filter((mission) => {
          const date = new Date(mission.launch_date_utc);
          const today = new Date();
          const diff = today.getTime() - date.getTime();
          const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
          return diffDays <= 30;
        })
      );
    } else if (args[0] === 'last year') {
      setFilteredMissions(
        missions.filter((mission) => {
          const date = new Date(mission.launch_date_utc);
          const today = new Date();
          const diff = today.getTime() - date.getTime();
          const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
          return diffDays <= 365;
        })
      );
    } else if (args[0]) {
      // filter by mission name or rocket name
      setFilteredMissions(
        missions.filter((mission) => {
          return (
            mission.mission_name
              .toLowerCase()
              .includes(args[0].toLowerCase()) ||
            mission.rocket.rocket_name
              .toLowerCase()
              .includes(args[0].toLowerCase())
          );
        })
      );
    } else {
      setFilteredMissions(missions);
    }
  };

  useEffect(() => {
    if (!missions) {
      dispatch(getMissions());
    }
    setFilteredMissions(missions);
  }, [dispatch, missions]);

  return (
    <div className="max-w-7xl mx-auto py-28">
      {!isLoading && missions && (
        <MissionsFilter handleMissionsFilter={handleMissionsFilter} />
      )}
      <div className="sm:columns-2 xl:columns-3 gap-10 [column-fill:_balance] px-2 sm:px-4 lg:px-6 py-20">
        {isLoading
          ? [...Array(9)].map((_, index) => <MissionCardSkeleton key={index} />)
          : filteredMissions &&
            filteredMissions.map((mission, index) => (
              <MissionCard key={index} mission={mission} />
            ))}
      </div>
    </div>
  );
};

export default Missions;
