import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from '../../common/redux-helper';

// const ADD = 'timeline/ADD';
// const REMOVE = 'timeline/REMOVE';
// const EDIT = 'timeline/EDIT';
// const INCREASE_NEXT_PAGE = 'timeline/INCREASE_NEXT_PAGE';

// export const addtimeline = (timeline) => ({ type: ADD, timeline });
// export const removetimeline = (timeline) => ({ type: REMOVE, timeline });
// export const edittimeline = (timeline) => ({ type: EDIT, timeline });
// export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

export const types = {
  ADD: 'timeline/ADD',
  REMOVE: 'timeline/REMOVE',
  EDIT: 'timeline/EDIT',
  INCREASE_NEXT_PAGE: 'timeline/INCREASE_NEXT_PAGE',
  REQUEST_LIKE: 'timeline/REQUEST_LIKE',
  ADD_LIKE: 'timeline/ADD_LIKE',
  SET_LOADING: 'timeline/SET_LOADING',
  SET_VALUE: 'timeline/SET_VALUE',
  TRY_SET_TEXT: 'timeline/TRY_SET_TEXT',
};

export const actions = {
  addtimeline: (timeline) => ({ type: types.ADD, timeline }),
  removetimeline: (timeline) => ({ type: types.REMOVE, timeline }),
  edittimeline: (timeline) => ({ type: types.EDIT, timeline }),
  increaseNextPage: () => ({ type: types.INCREASE_NEXT_PAGE }),
  requestLike: (timeline) => ({ type: types.REQUEST_LIKE, timeline }),
  addLike: (timelineId, value) => ({ type: types.ADD_LIKE, timelineId, value }),
  setLoading: (isLoading) => ({
    type: types.SET_LOADING,
    isLoading,
  }),
  setValue: createSetValueAction(types.SET_VALUE),
  trySetText: (text) => ({
    type: types.TRY_SET_TEXT,
    text,
  }),
};

const INITIAL_STATE = {
  timelines: [],
  nextPage: 0,
  isLoading: false,
  error: '',
  text: '',
};
const reducer = createReducer(INITIAL_STATE, {
  [types.ADD]: (state, action) => state.timelines.push(action.timeline),
  [types.REMOVE]: (state, action) =>
    (state.timelines = state.timelines.filter(
      (timeline) => timeline.id !== action.timeline.id
    )),
  [types.EDIT]: (state, action) => {
    const index = state.timelines.findIndex(
      (timeline) => timeline.id === action.timeline.id
    );
    if (index >= 0) {
      state.timeline[index] = action.timeline;
    }
  },
  [types.INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
  [types.ADD_LIKE]: (state, action) => {
    const timeline = state.timelines.find(
      (item) => item.id === action.timelineId
    );
    if (timeline) {
      timeline.likes += action.value;
    }
  },
  [types.SET_LOADING]: (state, action) => (state.isLoading = action.isLoading),
  [types.SET_VALUE]: setValueReducer,
});

export default reducer;
