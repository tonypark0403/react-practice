import { createSelector } from 'reselect';

const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => {
  console.log(state);
  return state.friend?.ageLimit;
};
export const getShowLimit = (state) => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => {
    console.log('getFriendsWithAgeLimit is called');
    return friends.filter((item) => item.age <= ageLimit);
  }
);

export const getFriendsWithAgeShowLimit = createSelector(
  [getFriendsWithAgeLimit, getShowLimit],
  (friendsWithAgeLimit, showLimit) => {
    console.log('getFriendsWithAgeShowLimit is called');
    return friendsWithAgeLimit.slice(0, showLimit);
  }
);
