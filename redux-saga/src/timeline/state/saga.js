import { all, call, debounce, put, takeLeading } from 'redux-saga/effects';
import { actions, types } from '.';
import { callApiLike } from '../../common/api';

export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  //   yield call(callApiLike);
  yield put(actions.setValue('error', ''));
  try {
    yield call(callApiLike);
  } catch (error) {
    yield put(actions.setValue('error', error));
    yield put(actions.addLike(action.timeline.id, -1));
  }
  yield put(actions.setLoading(false));
}

export function* trySetText(action) {
  yield put(actions.setValue('text', action.text));
}

export default function* () {
  yield all([
    takeLeading(types.REQUEST_LIKE, fetchData),
    debounce(500, types.TRY_SET_TEXT, trySetText),
  ]);
}

// saga explanation
// const a = take(types.REQUEST_LIKE);
// const b = put(Actions.setLoading(false));
// const c = call(callApiLike);
// console.log({ a, b, c });
// const logResult = {
//   a: {
//     TAKE: {
//       pattern: 'timeline/REQUEST_LIKE',
//     },
//   },
//   b: {
//     PUT: {
//       channel: null,
//       action: {
//         type: 'timeline/SET_LOADING',
//         isLoading: false,
//       },
//     },
//   },
//   c: {
//     CALL: {
//       context: null,
//       fn: callApiLike,
//       args: [],
//     },
//   },
// };
