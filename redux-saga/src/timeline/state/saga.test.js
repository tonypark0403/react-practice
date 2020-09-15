import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { actions } from './index';
import { fetchData } from './saga';
import { callApiLike } from '../../common/api';

describe('fetchData', () => {
  const timeline = { id: 1 };
  const action = actions.requestLike(timeline);
  const gen = cloneableGenerator(fetchData)(action);
  expect(gen.next().value).toEqual(put(actions.setLoading(true)));
  expect(gen.next().value).toEqual(put(actions.addLike(timeline.id, 1)));
  expect(gen.next().value).toEqual(put(actions.setValue('error', '')));
  expect(gen.next().value).toEqual(call(callApiLike));
  it('on fail callApiLike', () => {
    const gen2 = gen.clone();
    const errorMsg = 'error';
    expect(gen2.throw(errorMsg).value).toEqual(
      put(actions.setValue('error', errorMsg))
    );
    expect(gen2.next().value).toEqual(put(actions.addLike(timeline.id, -1)));
    expect(gen2.next(Promise.resolve()).value).toEqual(
      put(actions.setLoading(false))
    );
  });
  it('on success callApiLike', () => {
    const gen2 = gen.clone();
    expect(gen2.next(Promise.resolve()).value).toEqual(
      put(actions.setLoading(false))
    );
  });
});
