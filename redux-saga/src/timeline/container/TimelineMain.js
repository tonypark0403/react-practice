import React, { useEffect, useReducer } from 'react';
import { getNextTimeline } from '../../common/mockData';
import { addtimeline } from '../state';
import TimelineList from '../component/TimelineList';
import { useDispatch, useSelector } from 'react-redux';

export default function FriendMain() {
  const timelines = useSelector((state) => state.timeline.timelines);
  const dispatch = useDispatch();
  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(addtimeline(timeline));
  }
  console.log('TimelineMain render');
  return (
    <div>
      <button onClick={onAdd}>Add timeline</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}
