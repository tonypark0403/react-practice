import React from 'react';
import { getNextTimeline } from '../../common/mockData';
import { actions } from '../state';
import TimelineList from '../component/TimelineList';
import { useDispatch, useSelector } from 'react-redux';

export default function FriendMain() {
  const [currentText, setCurrentText] = useState('');
  const text = useSelector((state) => state.timeline.text);
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);
  const error = useSelector((state) => state.timeline.error);
  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(actions.addtimeline(timeline));
  }
  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(actions.requestLike(timeline));
  }
  function onChangeText(e) {
    const text = e.target.value;
    dispatch(actions.trySetText(text));
    setCurrentText(text);
  }

  console.log('TimelineMain render');
  return (
    <div>
      <button onClick={onAdd}>Add timeline</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>Loading...</p>}
      {!!error && <p>Error: {error}</p>}
      <input type='text' value={currentText} onChange={onChangeText} />
      {!!text && <p>{text}</p>}
    </div>
  );
}
