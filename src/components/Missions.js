import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../store/features/missionSlice';
import MissionCard from './MissionCard';
import MissionCardSkeleton from './MissionCardSkeleton';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading } = useSelector((state) => state.mission);
  useEffect(() => {
    if (!missions) {
      dispatch(getMissions());
    }
    console.log(missions);
  }, [dispatch, missions]);
  return (
    <div>
      <div class="sm:columns-2 xl:columns-3 gap-10 [column-fill:_balance] max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-28">
        {isLoading
          ? [...Array(9)].map((_, index) => <MissionCardSkeleton key={index} />)
          : missions &&
            missions.map((mission) => (
              <MissionCard key={mission.flight_number} mission={mission} />
            ))}
      </div>
    </div>
  );
};

export default Missions;
