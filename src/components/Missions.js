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

  const handleOnChange = (keyword) => {
    if (missions && keyword.trim()) {
      const filteredMissions = missions.filter((mission) => {
        return (
          mission.mission_name.toLowerCase().includes(keyword.toLowerCase()) ||
          mission.rocket.rocket_name
            .toLowerCase()
            .includes(keyword.toLowerCase())
        );
      });
      setFilteredMissions(filteredMissions);
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
        <MissionsFilter handleOnChange={handleOnChange} />
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
