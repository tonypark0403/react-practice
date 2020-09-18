import { Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import History from '../../common/component/History';
import useNeedLogin from '../../common/hook/useNeedLogin';
import Settings from '../component/Settings';
import { actions } from '../state';
import SearchInput from './SearchInput';
import { actions as authActions } from '../../auth/state';

export default function Search() {
  useNeedLogin();
  const history = useSelector((state) => state.search.history);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchAllHistory());
  }, [dispatch]);

  function logout() {
    dispatch(authActions.fetchLogout());
  }
  return (
    <>
      <Row justify='end' style={{ padding: 20 }}>
        <Col>
          <Settings logout={logout} />
        </Col>
      </Row>
      <Row justify='center' style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: 'Caligrahhy' }}>
            Management
          </Typography.Title>
        </Col>
      </Row>
      <Row justify='center' style={{ marginTop: 50 }}>
        <Col xs={20} md={16} lg={12}>
          <SearchInput />
        </Col>
      </Row>
      <Row justify='center' style={{ marginTop: 50 }}>
        <Col xs={20} md={16} lg={12}>
          <History items={history} />{' '}
        </Col>
      </Row>
    </>
  );
}
