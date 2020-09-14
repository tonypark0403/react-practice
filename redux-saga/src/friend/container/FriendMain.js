import React from 'react';
import { getNextFriend } from '../../common/mockData';
import { actions } from '../state';
import FriendList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';
import { useSelector, useDispatch } from 'react-redux';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';
import {
  getAgeLimit,
  getFriendsWithAgeLimit,
  getFriendsWithAgeShowLimit,
  getShowLimit,
} from '../state/selector';

export default function FriendMain() {
  //   const [
  //     ageLimit,
  //     showLimit,
  //     friendsWithAgeLimit,
  //     friendsWithAgeShowLimit,
  //   ] = useSelector((state) => {
  //     // const { ageLimit, showLimit, friends } = state.friend;
  //     // const friendsWithAgeLimit = friends.filter((item) => item.age <= ageLimit);
  //     // return [
  //     //   ageLimit,
  //     //   showLimit,
  //     //   friendsWithAgeLimit,
  //     //   friendsWithAgeLimit.slice(0, showLimit),
  //     // ]; => to selector
  //     return (
  //       [
  //         getAgeLimit(state),
  //         getShowLimit(state),
  //         getFriendsWithAgeLimit(state),
  //         getFriendsWithAgeShowLimit(state),
  //       ],
  //       shallowEqual
  //     );
  //   });
  const ageLimit = useSelector(getAgeLimit);
  const showLimit = useSelector(getShowLimit);
  const friendsWithAgeLimit = useSelector(getFriendsWithAgeLimit);
  const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    dispatch(actions.addFriend(friend));
  }
  console.log('FriendMain render');
  return (
    <div>
      <button onClick={onAdd}>Add friend</button>
      <NumberSelect
        // onChange={(v) => dispatch(actions.setAgeLimit(v))}
        onChange={(v) => dispatch(actions.setValue('ageLimit', v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix=' years old - display'
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        // onChange={(v) => dispatch(actions.setShowLimit(v))}
        onChange={(v) => dispatch(actions.setValue('showLimit', v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix=' people with age filter - display'
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];
